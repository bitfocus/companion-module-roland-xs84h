const { combineRgb } = require('@companion-module/base')

module.exports = {
	initPresets: function () {
		let self = this
		let presets = []

		const foregroundColor = combineRgb(255, 255, 255) // White
		const foregroundColorBlack = combineRgb(0, 0, 0) // Black
		const backgroundColorRed = combineRgb(255, 0, 0) // Red
		const backgroundColorWhite = combineRgb(255, 255, 255) // White

		for (let i = 0; i < self.CHOICES_INPUTS.length; i++) {
			for (let j = 0; j < self.CHOICES_OUTPUTS.length; j++) {
				presets.push({
					category: 'Crosspoints',
					label: 'Route Input ' + (i + 1) + ' Output ' + (j + 1),
					bank: {
						style: 'text',
						text: 'XPT ' + (i + 1) + ' TO ' + (j + 1),
						size: '14',
						color: '16777215',
						bgcolor: combineRgb(0, 0, 0),
					},
					actions: [
						{
							action: 'outputchannel_inputchannel_audioandvideo',
							options: {
								output: j.toString(),
								input: i.toString(),
							},
						},
					],
					feedbacks: [
						{
							type: 'crosspoint',
							options: {
								input: i.toString(),
								output: j.toString(),
								option: 'both',
							},
							style: {
								color: foregroundColor,
								bgcolor: backgroundColorRed,
							},
						},
					],
				})
			}
		}

		for (let j = 0; j < self.CHOICES_OUTPUTS.length; j++) {
			presets.push({
				category: 'Outputs',
				label: 'Turn Output ' + (j + 1) + ' On/Off',
				bank: {
					style: 'text',
					text: 'OUT ' + (j + 1),
					size: '14',
					color: '16777215',
					bgcolor: combineRgb(0, 0, 0),
					latch: true,
				},
				steps: [
					{
						down: [
							{
								actionId: 'outputchannel_onoff',
								options: {
									output: j.toString(),
									value: '0',
								},
							},
						],
						up: [
							{
								actionId: 'outputchannel_onoff',
								options: {
									output: j.toString(),
									value: '1',
								},
							},
						],
					},
				],
				feedbacks: [
					{
						feedbackId: 'outputStatus',
						options: {
							output: j.toString(),
							option: '0',
						},
						style: {
							color: foregroundColor,
							bgcolor: backgroundColorRed,
						},
					},
					{
						feedbackId: 'outputStatus',
						options: {
							output: j.toString(),
							option: '1',
						},
						style: {
							color: foregroundColorBlack,
							bgcolor: backgroundColorWhite,
						},
					},
				],
			})
		}

		self.setPresetDefinitions(presets)
	},
}
