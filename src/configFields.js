module.exports = {
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Roland XS-84H Module',
				value: 'This module will connect to a Roland Pro AV XS-82H, XS-83H, or XS-84H Video Processor.',
			},
			{
				type: 'textinput',
				id: 'host',
				width: 6,
				label: 'IP Address of Roland Device',
				default: '192.168.0.1',
			},
			{
				type: 'static-text',
				id: 'hr1',
				width: 12,
				label: ' ',
				value: '<hr />',
			},
			{
				type: 'checkbox',
				id: 'verbose',
				label: 'Enable Verbose Logging',
				default: false,
			},
		]
	},
}
