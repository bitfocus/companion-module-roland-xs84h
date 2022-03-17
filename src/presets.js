module.exports = {
	setPresets: function () {
		let self = this;
		let presets = [];

		const foregroundColor = self.rgb(255, 255, 255) // White
		const backgroundColorRed = self.rgb(255, 0, 0) // Red

		for (let i = 0; i < self.CHOICES_INPUTS.length; i++) {
			for (let j = 0; j < self.CHOICES_OUTPUTS.length; j++) {
				presets.push({
					category: 'Crosspoints',
					label: 'Route Input ' + (i+1) + ' Output ' + (j+1),
					bank: {
						style: 'text',
						text: 'XPT ' + (i+1) + ' TO ' + (j+1),
						size: '14',
						color: '16777215',
						bgcolor: self.rgb(0, 0, 0)
					},
					actions: [
						{
							action: 'outputchannel_inputchannel_audioandvideo',
							options: {
								output: j.toString(),
								input: i.toString()
							}
						}
					],
					feedbacks: [
						{
							type: 'crosspoint',
							options: {
								input: i.toString(),
								output: j.toString(),
								option: 'both'
							},
							style: {
								color: foregroundColor,
								bgcolor: backgroundColorRed
							}
						}
					]
				})
			}
		}		
	
		return presets;
	}
}
