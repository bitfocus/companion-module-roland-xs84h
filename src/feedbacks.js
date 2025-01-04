const { combineRgb } = require('@companion-module/base')

module.exports = {
	initFeedbacks: function () {
		let self = this
		let feedbacks = {}

		const foregroundColor = combineRgb(255, 255, 255) // White
		const backgroundColorRed = combineRgb(255, 0, 0) // Red

		feedbacks.inputHDCP = {
			type: 'boolean',
			name: 'Input HDCP',
			description: 'Indicate if Input Channel HDCP is On or Off',
			style: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: self.CHOICES_INPUTS[0].id,
					choices: self.CHOICES_INPUTS,
				},
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'Off' },
						{ id: '1', label: 'On' },
					],
				},
			],
			callback: function (feedback, bank) {
				let opt = feedback.options

				let inputTypeObj = self.INPUTS_DATA.find((INPUT) => INPUT.channel == opt.input)
				if (inputTypeObj) {
					if (inputTypeObj.hdcp == opt.option) {
						return true
					}
				}

				return false
			},
		}

		feedbacks.outputHDCP = {
			type: 'boolean',
			name: 'Output HDCP',
			description: 'Indicate if Output Channel HDCP is On or Off',
			style: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: self.CHOICES_OUTPUTS[0].id,
					choices: self.CHOICES_OUTPUTS,
				},
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'Off' },
						{ id: '1', label: 'On' },
					],
				},
			],
			callback: function (feedback, bank) {
				let opt = feedback.options

				let outputTypeObj = self.OUTPUTS_DATA.find((OUTPUT) => OUTPUT.channel == opt.output)
				if (outputTypeObj) {
					if (outputTypeObj.hdcp == opt.option) {
						return true
					}
				}

				return false
			},
		}

		feedbacks.crosspoint = {
			type: 'boolean',
			name: 'Crosspoint',
			description: 'Indicate if Input Channel is routed to Output Channel',
			style: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: self.CHOICES_INPUTS[0].id,
					choices: self.CHOICES_INPUTS,
				},
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: self.CHOICES_OUTPUTS[0].id,
					choices: self.CHOICES_OUTPUTS,
				},
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: 'video',
					choices: [
						{ id: 'video', label: 'Video Only' },
						{ id: 'audio', label: 'Audio Only' },
						{ id: 'both', label: 'Both' },
					],
				},
			],
			callback: function (feedback, bank) {
				let opt = feedback.options

				let crosspointObj = self.CROSSPOINTS_DATA.find((XPT) => XPT.channel == opt.output)

				if (crosspointObj) {
					let video = false
					let audio = false

					if (crosspointObj.video == opt.input) {
						video = true
					}
					if (crosspointObj.audio == opt.input) {
						audio = true
					}

					if (opt.option == 'video' && video == true) {
						return true
					} else if (opt.option == 'audio' && audio == true) {
						return true
					} else if (opt.option == 'both' && video == true && audio == true) {
						return true
					}
				}

				return false
			},
		}

		feedbacks.outputStatus = {
			type: 'boolean',
			name: 'Output Status',
			description: 'Indicate if Output Channel is On or Off',
			style: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: self.CHOICES_OUTPUTS[0].id,
					choices: self.CHOICES_OUTPUTS,
				},
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'Off' },
						{ id: '1', label: 'On' },
					],
				},
			],
			callback: function (feedback, bank) {
				let opt = feedback.options

				let crosspointObj = self.CROSSPOINTS_DATA.find((XPT) => XPT.channel == opt.output)
				if (crosspointObj) {
					if (crosspointObj.outputStatus == opt.option) {
						return true
					}
				}

				return false
			},
		}

		return feedbacks
	},
}
