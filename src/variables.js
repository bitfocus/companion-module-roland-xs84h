module.exports = {
	initVariables: function () {
		let self = this
		let variables = []

		variables.push({ variableId: 'model', name: 'Model' })
		variables.push({ variableId: 'version', name: 'Version' })

		for (let i = 0; i < self.INPUTS_DATA.length; i++) {
			variables.push({ variableId: 'input_' + (i + 1) + '_type', name: 'Input ' + (i + 1) + ' Type' })
			variables.push({ variableId: 'input_' + (i + 1) + '_colorspace', name: 'Input ' + (i + 1) + ' Color Space' })
			variables.push({ variableId: 'input_' + (i + 1) + '_hdcp', name: 'Input ' + (i + 1) + ' HDCP Enabled' })
			variables.push({ variableId: 'input_' + (i + 1) + '_aspectratio', name: 'Input ' + (i + 1) + ' Aspect Ratio' })
		}

		for (let i = 0; i < self.OUTPUTS_DATA.length; i++) {
			variables.push({ variableId: 'output_' + (i + 1) + '_select', name: 'Output ' + (i + 1) + ' Select' })
			variables.push({ variableId: 'output_' + (i + 1) + '_resolution', name: 'Output ' + (i + 1) + ' Resolution' })
			variables.push({ variableId: 'output_' + (i + 1) + '_hdcp', name: 'Output ' + (i + 1) + ' HDCP Enabled' })
			variables.push({ variableId: 'output_' + (i + 1) + '_colorspace', name: 'Output ' + (i + 1) + ' Color Space' })
			variables.push({ variableId: 'output_' + (i + 1) + '_signal', name: 'Output ' + (i + 1) + ' Signal Type' })
		}

		for (let i = 0; i < self.CROSSPOINTS_DATA.length; i++) {
			variables.push({ variableId: 'output_' + (i + 1) + '_video', name: 'Output ' + (i + 1) + ' Video Channel' })
			variables.push({ variableId: 'output_' + (i + 1) + '_audio', name: 'Output ' + (i + 1) + ' Audio Channel' })
			variables.push({
				variableId: 'output_' + (i + 1) + '_button',
				name: 'Output ' + (i + 1) + ' Output Button Status',
			})
		}

		self.setVariableDefinitions(variables)
	},

	checkVariables: function () {
		let self = this

		try {
			let variableObj = {}

			variableObj['model'] = self.MODEL
			variableObj['version'] = self.VERSION

			for (let i = 0; i < self.INPUTS_DATA.length; i++) {
				let inputType = ''
				let inputTypeObj = self.CHOICES_INPUT_TYPES.find((INPUT) => INPUT.id === self.INPUTS_DATA[i].inputType)
				if (inputTypeObj) {
					inputType = inputTypeObj.label
				}
				variableObj['input_' + (i + 1) + '_type'] = inputType

				let inputColorspace = ''
				let inputColorspaceObj = self.CHOICES_INPUT_COLORSPACES.find(
					(INPUT) => INPUT.id === self.INPUTS_DATA[i].colorSpace
				)
				if (inputColorspaceObj) {
					inputColorspace = inputColorspaceObj.label
				}
				variableObj['input_' + (i + 1) + '_colorspace'] = inputColorspace

				let inputHdcp = self.INPUTS_DATA[i].hdcp == '1' ? 'Enabled' : 'Disabled'
				variableObj['input_' + (i + 1) + '_hdcp'] = inputHdcp

				let inputAspect = ''
				switch (self.INPUTS_DATA[i].aspect) {
					case '0':
						inputAspect = 'Full'
						break
					case '1':
						inputAspect = 'Letterbox'
						break
					case '2':
						inputAspect = 'Crop'
						break
					case '3':
						inputAspect = 'Dot by Dot'
						break
					case '4':
						inputAspect = 'Manual'
						break
				}
				variableObj['input_' + (i + 1) + '_aspectratio'] = inputAspect
			}

			for (let i = 0; i < self.OUTPUTS_DATA.length; i++) {
				let outputSelect = ''
				switch (self.OUTPUTS_DATA[i].outputSelect) {
					case '0':
						outputSelect = 'Auto'
						break
					case '1':
						outputSelect = 'HDMI'
						break
					case '2':
						outputSelect = 'HDBaseT'
						break
				}
				variableObj['output_' + (i + 1) + '_select'] = outputSelect

				let outputResolution = ''
				let outputResolutionObj = self.CHOICES_OUTPUT_RESOLUTIONS.find(
					(OUTPUT) => OUTPUT.id === self.OUTPUTS_DATA[i].resolution
				)
				if (outputResolutionObj) {
					outputResolution = outputResolutionObj.label
				}
				variableObj['output_' + (i + 1) + '_resolution'] = outputResolution

				let outputHdcp = self.OUTPUTS_DATA[i].hdcp == '1' ? 'Enabled' : 'Disabled'
				variableObj['output_' + (i + 1) + '_hdcp'] = outputHdcp

				let outputColorspace = ''
				let outputColorspaceObj = self.CHOICES_OUTPUT_COLORSPACES.find(
					(OUTPUT) => OUTPUT.id === self.OUTPUTS_DATA[i].colorSpace
				)
				if (outputColorspaceObj) {
					outputColorspace = outputColorspaceObj.label
				}
				variableObj['output_' + (i + 1) + '_colorspace'] = outputColorspace

				let outputSignal = ''
				switch (self.OUTPUTS_DATA[i].signal) {
					case '0':
						outputSignal = 'DVI-D'
						break
					case '1':
						outputSignal = 'HDMI'
						break
				}
				variableObj['output_' + (i + 1) + '_signal'] = outputSignal
			}

			for (let i = 0; i < self.CROSSPOINTS_DATA.length; i++) {
				let crosspointVideo = ''
				let crosspointVideoObj = self.CHOICES_INPUTS.find((INPUT) => INPUT.id === self.CROSSPOINTS_DATA[i].video)
				if (crosspointVideoObj) {
					crosspointVideo = crosspointVideoObj.label
				}
				variableObj['output_' + (i + 1) + '_video'] = crosspointVideo

				let crosspointAudio = ''
				let crosspointAudioObj = self.CHOICES_INPUTS.find((INPUT) => INPUT.id === self.CROSSPOINTS_DATA[i].audio)
				if (crosspointAudioObj) {
					crosspointAudio = crosspointAudioObj.label
				}
				variableObj['output_' + (i + 1) + '_audio'] = crosspointAudio

				let outputStatus = self.CROSSPOINTS_DATA[i].outputStatus == '1' ? 'On' : 'Off'
				variableObj['output_' + (i + 1) + '_button'] = outputStatus
			}

			self.setVariableValues(variableObj)
		} catch (error) {
			self.log('error', 'Error setting Variables from Device: ' + String(error))
		}
	},
}
