module.exports = {
	INTERVAL: null,
	RATE: 1000,

	INPUTS_DATA: [
		{ channel: '0', inputType: null, colorSpace: null, hdcp: '0', aspect: null },
		{ channel: '1', inputType: null, colorSpace: null, hdcp: '0', aspect: null },
		{ channel: '2', inputType: null, colorSpace: null, hdcp: '0', aspect: null },
		{ channel: '3', inputType: null, colorSpace: null, hdcp: '0', aspect: null },
		{ channel: '4', inputType: null, colorSpace: null, hdcp: '0', aspect: null },
		{ channel: '5', inputType: null, colorSpace: null, hdcp: '0', aspect: null },
		{ channel: '6', inputType: null, colorSpace: null, hdcp: '0', aspect: null },
		{ channel: '7', inputType: null, colorSpace: null, hdcp: '0', aspect: null },
	],

	OUTPUTS_DATA: [
		{ channel: '0', outputSelect: null, resolution: null, hdcp: '0', colorSpace: null, signal: null },
		{ channel: '1', outputSelect: null, resolution: null, hdcp: '0', colorSpace: null, signal: null },
		{ channel: '2', outputSelect: null, resolution: null, hdcp: '0', colorSpace: null, signal: null },
		{ channel: '3', outputSelect: null, resolution: null, hdcp: '0', colorSpace: null, signal: null },
	],

	CROSSPOINTS_DATA: [
		{ channel: '0', video: null, audio: null, outputStatus: null },
		{ channel: '1', video: null, audio: null, outputStatus: null },
		{ channel: '2', video: null, audio: null, outputStatus: null },
		{ channel: '3', video: null, audio: null, outputStatus: null },
	],

	KEYLOCK_MODES_DATA: {
		lockStatus: null,
		crossPoint: null,
		switchMode: null,
		menuExit: null,
		cursorValue: null,
		crossNoInput: null,
		crossOff: null,
		crossOutput1: null,
		crossOutput2: null,
		crossOutput3: null,
		crossOutput4: null,
	},

	MODEL: '',
	VERSION: '',

	CHOICES_INPUTS: [
		{ id: '0', label: 'Input 1' },
		{ id: '1', label: 'Input 2' },
		{ id: '2', label: 'Input 3' },
		{ id: '3', label: 'Input 4' },
		{ id: '4', label: 'Input 5' },
		{ id: '5', label: 'Input 6' },
		{ id: '6', label: 'Input 7' },
		{ id: '7', label: 'Input 8' },
	],

	CHOICES_INPUT_TYPES: [
		{ id: '0', label: 'HDMI' },
		{ id: '1', label: 'RGB/Component' },
		{ id: '2', label: 'Composite' },
		{ id: '3', label: 'Y/C S-Video' },
		{ id: '4', label: 'Still 1' },
		{ id: '5', label: 'Still 2' },
		{ id: '6', label: 'Still 3' },
		{ id: '7', label: 'Still 4' },
		{ id: '8', label: 'Share' },
	],

	CHOICES_INPUT_COLORSPACES: [
		{ id: '0', label: 'Auto' },
		{ id: '1', label: 'RGB (0-255)' },
		{ id: '2', label: 'RGB (16-235)' },
		{ id: '3', label: 'YCC (SD)' },
		{ id: '4', label: 'YCC (HD)' },
	],

	CHOICES_INPUT_CHANNELS: [
		{ id: '0', label: 'HDMI 1' },
		{ id: '1', label: 'HDMI 2' },
		{ id: '2', label: 'HDMI 3' },
		{ id: '3', label: 'HDMI 4' },
		{ id: '4', label: 'HDMI 5' },
		{ id: '5', label: 'HDMI 6' },
		{ id: '6', label: 'HDMI 7' },
		{ id: '7', label: 'HDMI 8' },
		{ id: '8', label: 'Analog 1' },
		{ id: '9', label: 'Analog 2' },
		{ id: '10', label: 'Analog 3' },
		{ id: '11', label: 'Analog 4' },
		{ id: '12', label: 'Analog 5' },
		{ id: '13', label: 'Analog 6' },
		{ id: '14', label: 'Analog 7' },
		{ id: '15', label: 'Analog 8' },
	],

	CHOICES_OUTPUTS: [
		{ id: '0', label: 'Output 1' },
		{ id: '1', label: 'Output 2' },
		{ id: '2', label: 'Output 3 (XS-83 and XS-84 only)' },
		{ id: '3', label: 'Output 4 (XS-84 only)' },
	],

	CHOICES_OUTPUT_TYPES: [
		{ id: '0', label: 'DVI-D' },
		{ id: '1', label: 'HDMI' },
	],

	CHOICES_OUTPUT_COLORSPACES: [
		{ id: '0', label: 'Auto' },
		{ id: '1', label: 'RGB (0-255)' },
		{ id: '2', label: 'RGB (16-235)' },
		{ id: '3', label: 'YCC (444)' },
		{ id: '4', label: 'YCC (422)' },
	],

	CHOICES_OUTPUT_RESOLUTIONS: [
		{ id: '0', label: '480i 4:3/576i 4:3' },
		{ id: '1', label: '480i 16:9/576i 16:9' },
		{ id: '2', label: '480p 4:3/576p 4:3' },
		{ id: '3', label: '480p 16:9/576p 16:9' },
		{ id: '4', label: '720/59.94P' },
		{ id: '5', label: '1080/59.94i' },
		{ id: '6', label: '1080/59.94P' },
		{ id: '7', label: '640 x 480' },
		{ id: '8', label: '800 x 600' },
		{ id: '9', label: '1024 x 768' },
		{ id: '10', label: '1280 x 768' },
		{ id: '11', label: '1280 x 800' },
		{ id: '12', label: '1366 x 768' },
		{ id: '13', label: '1280 x 1024' },
		{ id: '15', label: '1600 x 1200' },
		{ id: '16', label: '1920 x 1200' },
	],

	CHOICES_OUTPUT_MODES: [
		{ id: '0', label: 'Matrix' },
		{ id: '1', label: 'Multi-2' },
		{ id: '2', label: 'Multi-3' },
		{ id: '3', label: 'Multi-4' },
		{ id: '4', label: 'Span-2' },
		{ id: '5', label: 'Span-3' },
		{ id: '6', label: 'Span-4' },
		{ id: '7', label: 'Rotation-L1' },
		{ id: '8', label: 'Rotation-L2' },
		{ id: '9', label: 'Rotation-L3' },
		{ id: '10', label: 'Rotation-L4' },
		{ id: '11', label: 'Rotation-R1' },
		{ id: '12', label: 'Rotation-R2' },
		{ id: '13', label: 'Rotation-R3' },
		{ id: '14', label: 'Rotation-R4' },
		{ id: '15', label: '4K-1' },
		{ id: '16', label: '4K-2' },
		{ id: '17', label: 'Dissolve-1' },
		{ id: '18', label: 'PGM-PST' },
		{ id: '19', label: '2 x PGM-PST' },
		{ id: '20', label: '3 x PGM-PST' },
		{ id: '21', label: 'Dual Dissolve' },
		{ id: '22', label: 'Dual PGM-PST' },
	],

	CHOICES_PRESETS: [
		{ id: '0', label: 'Preset 1' },
		{ id: '1', label: 'Preset 2' },
		{ id: '2', label: 'Preset 3' },
		{ id: '3', label: 'Preset 4' },
		{ id: '4', label: 'Preset 5' },
		{ id: '5', label: 'Preset 6' },
		{ id: '6', label: 'Preset 7' },
		{ id: '7', label: 'Preset 8' },
		{ id: '8', label: 'Preset 9' },
		{ id: '9', label: 'Preset 10' },
		{ id: '10', label: 'Preset 11' },
		{ id: '11', label: 'Preset 12' },
		{ id: '12', label: 'Preset 13' },
		{ id: '13', label: 'Preset 14' },
		{ id: '14', label: 'Preset 15' },
		{ id: '15', label: 'Preset 16' },
		{ id: '16', label: 'Preset 17' },
		{ id: '17', label: 'Preset 18' },
		{ id: '18', label: 'Preset 19' },
		{ id: '19', label: 'Preset 20' },
		{ id: '20', label: 'Preset 21' },
		{ id: '21', label: 'Preset 22' },
		{ id: '22', label: 'Preset 23' },
		{ id: '23', label: 'Preset 24' },
		{ id: '24', label: 'Preset 25' },
		{ id: '25', label: 'Preset 26' },
		{ id: '26', label: 'Preset 27' },
		{ id: '27', label: 'Preset 28' },
		{ id: '28', label: 'Preset 29' },
		{ id: '29', label: 'Preset 30' },
		{ id: '30', label: 'Preset 31' },
		{ id: '31', label: 'Preset 32' },
	],

	CHOICES_EDID_RGB: [
		{ id: '0', label: 'Internal' },
		{ id: '1', label: '640 x 480' },
		{ id: '2', label: '800 x 600' },
		{ id: '3', label: '1024 x 768' },
		{ id: '4', label: '1280 x 720' },
		{ id: '5', label: '1280 x 800' },
		{ id: '6', label: '1366 x 768' },
		{ id: '7', label: '1280 x 1024' },
		{ id: '8', label: '1400 x 1050' },
		{ id: '9', label: '1600 x 1200' },
		{ id: '10', label: '1920 x 1200' },
	],

	CHOICES_EDID_HDMI: [
		{ id: '0', label: 'Internal' },
		{ id: '1', label: '640 x 480' },
		{ id: '2', label: '800 x 600' },
		{ id: '3', label: '1024 x 768' },
		{ id: '4', label: '1280 x 720' },
		{ id: '5', label: '1280 x 800' },
		{ id: '6', label: '1366 x 768' },
		{ id: '7', label: '1280 x 1024' },
		{ id: '8', label: '1400 x 1050' },
		{ id: '9', label: '1600 x 1200' },
		{ id: '10', label: '1920 x 1200' },
		{ id: '11', label: 'DATA1' },
		{ id: '12', label: 'DATA2' },
		{ id: '13', label: 'DATA3' },
		{ id: '14', label: 'DATA4' },
		{ id: '15', label: 'DATA5' },
		{ id: '16', label: 'DATA6' },
		{ id: '17', label: 'DATA7' },
		{ id: '18', label: 'DATA8' },
		{ id: '19', label: '480i 4:3/576i 4:3' },
		{ id: '20', label: '480i 16:9/576i 16:9' },
		{ id: '21', label: '480p 4:3/576p 4:3' },
		{ id: '22', label: '480p 16: 9/576p 16: 9' },
		{ id: '23', label: '720p' },
		{ id: '24', label: '1080i' },
		{ id: '25', label: '1080p' },
	],

	CHOICES_KEYLOCKMODES: [
		{ id: '0', label: 'Crosspoint' },
		{ id: '1', label: 'Switching Mode' },
		{ id: '2', label: 'Menu + Exit' },
		{ id: '3', label: 'Cursor + Value' },
		{ id: '4', label: 'Cross - No Input' },
		{ id: '5', label: 'Cross - Off' },
		{ id: '6', label: 'Cross - Output 1' },
		{ id: '7', label: 'Cross - Output 2' },
		{ id: '8', label: 'Cross - Output 3' },
		{ id: '9', label: 'Cross - Output 4' },
	],
}
