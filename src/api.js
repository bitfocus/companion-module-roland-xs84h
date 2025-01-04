const { InstanceStatus, TCPHelper } = require('@companion-module/base')

module.exports = {
	initConnection() {
		let self = this

		if (self.socket !== undefined) {
			self.socket.destroy()
			delete self.socket
		}

		if (self.config.port === undefined) {
			self.config.port = 8023
		}

		if (self.config.host) {
			self.log('info', `Opening connection to ${self.config.host}:${self.config.port}`)

			self.socket = new TCPHelper(self.config.host, self.config.port)

			self.socket.on('error', function (err) {
				self.updateStatus(InstanceStatus.ConnectionFailure)
				clearInterval(self.INTERVAL)
				self.handleError(err)
			})

			self.socket.on('connect', function () {
				self.updateStatus(InstanceStatus.Ok)
				self.startInterval()
			})

			self.socket.on('data', function (buffer) {
				let indata = buffer.toString('utf8')
				//update feedbacks and variables
				self.updateData(indata)
			})
		}
	},

	handleError: function (err) {
		let self = this

		let error = err.toString()
		let printedError = false

		Object.keys(err).forEach(function (key) {
			if (key === 'code') {
				if (err[key] === 'ECONNREFUSED') {
					error =
						'Unable to communicate with Device. Connection refused. Is this the right IP address? Is it still online?'
					self.log('error', error)
					printedError = true
					if (self.socket !== undefined) {
						self.socket.destroy()
					}
				} else if (err[key] === 'ETIMEDOUT') {
					error =
						'Unable to communicate with Device. Connection timed out. Is this the right IP address? Is it still online?'
					self.log('error', error)
					printedError = true
					if (self.socket !== undefined) {
						self.socket.destroy()
					}
				}
			}
		})

		if (!printedError) {
			self.log('error', `Error: ${error}`)
		}
	},

	startInterval() {
		let self = this

		self.log('debug', `Starting Update Interval: Fetching new data from Device every ${self.RATE}ms.`)
		self.INTERVAL = setInterval(self.getData.bind(this), self.RATE)
	},

	getData() {
		let self = this

		if (self.socket) {
			for (let i = 0; i < 8; i++) {
				self.socket.send('ITS:' + i + ';')
			}

			for (let i = 0; i < 4; i++) {
				self.socket.send('OTS:' + i + ';')
			}

			for (let i = 0; i < 4; i++) {
				self.socket.send('CTS:' + i + ';')
			}

			self.socket.send('KLS;')
			self.socket.send('VER;')
		}
	},

	updateData: function (data) {
		let self = this

		if (self.config.verbose) {
			self.log('debug', data)
		}

		if (data.indexOf(';')) {
			let dataGroups = data.trim().split(';')
			for (let j = 0; j < dataGroups.length; j++) {
				dataGroups[j] = dataGroups[j].trim()
				if (dataGroups[j] !== 'ACK' && dataGroups[j] !== '') {
					let dataSet = dataGroups[j].trim().split(':')
					let dataPrefix = dataSet[0].toString().trim()
					let dataSuffix = dataSet[1].toString().split(',')

					//self.log('debug', dataGroups[j]);

					switch (dataPrefix) {
						case 'ITS':
							for (let i = 0; i < self.INPUTS_DATA.length; i++) {
								if (self.INPUTS_DATA[i].channel.toString() == dataSuffix[0].toString()) {
									self.INPUTS_DATA[i].inputType = dataSuffix[1].toString()
									self.INPUTS_DATA[i].colorSpace = dataSuffix[2].toString()
									self.INPUTS_DATA[i].hdcp = dataSuffix[3].toString()
									self.INPUTS_DATA[i].aspect = dataSuffix[4].toString()
									break
								}
							}
							break
						case 'OTS':
							for (let i = 0; i < self.OUTPUTS_DATA.length; i++) {
								if (self.OUTPUTS_DATA[i].channel.toString() == dataSuffix[0].toString()) {
									self.OUTPUTS_DATA[i].outputSelect = dataSuffix[1].toString()
									self.OUTPUTS_DATA[i].resolution = dataSuffix[2].toString()
									self.OUTPUTS_DATA[i].hdcp = dataSuffix[3].toString()
									self.OUTPUTS_DATA[i].colorSpace = dataSuffix[4].toString()
									self.OUTPUTS_DATA[i].signal = dataSuffix[5].toString()
									break
								}
							}
							break
						case 'CTS':
							for (let i = 0; i < self.CROSSPOINTS_DATA.length; i++) {
								if (self.CROSSPOINTS_DATA[i].channel.toString() == dataSuffix[0].toString()) {
									self.CROSSPOINTS_DATA[i].video = dataSuffix[1].toString()
									self.CROSSPOINTS_DATA[i].audio = dataSuffix[2].toString()
									self.CROSSPOINTS_DATA[i].outputStatus = dataSuffix[3].toString()
									break
								}
							}
							break
						case 'KLS':
							self.KEYLOCK_MODES_DATA.lockStatus = dataSuffix[0].toString()
							self.KEYLOCK_MODES_DATA.crossPoint = dataSuffix[1].toString()
							self.KEYLOCK_MODES_DATA.switchMode = dataSuffix[2].toString()
							self.KEYLOCK_MODES_DATA.menuExit = dataSuffix[3].toString()
							self.KEYLOCK_MODES_DATA.cursorValue = dataSuffix[4].toString()
							self.KEYLOCK_MODES_DATA.crossNoInput = dataSuffix[5].toString()
							self.KEYLOCK_MODES_DATA.crossOff = dataSuffix[6].toString()
							self.KEYLOCK_MODES_DATA.crossOutput1 = dataSuffix[7].toString()
							self.KEYLOCK_MODES_DATA.crossOutput2 = dataSuffix[8].toString()
							self.KEYLOCK_MODES_DATA.crossOutput3 = dataSuffix[9].toString()
							self.KEYLOCK_MODES_DATA.crossOutput4 = dataSuffix[10].toString()
							break
						case 'VER':
							self.MODEL = dataSuffix[0].toString()
							self.VERSION = dataSuffix[1].toString()
							break
					}
				}
			}

			self.checkFeedbacks()
			self.checkVariables()
		}
	},

	sendCommand: function (cmd) {
		let self = this

		if (cmd !== undefined) {
			if (self.socket !== undefined && self.socket.connected) {
				self.socket.send(cmd)
			} else {
				self.log('debug', 'Socket not connected :(')
			}
		}
	},
}
