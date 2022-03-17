// Roland-xs84h

var instance_skel = require('../../../instance_skel');

var tcp = require('../../../tcp');

var actions = require('./actions.js')
var feedbacks = require('./feedbacks.js')
var variables = require('./variables.js')
var presets = require('./presets.js')

var debug;
var log;

function instance(system, id, config) {
	let self = this;

	// super-constructor
	instance_skel.apply(this, arguments);

	return self;
}

instance.prototype.INTERVAL = null; //usd for polling device for feedbacks

instance.prototype.INPUTS_DATA = [
	{ channel: '0', inputType: null, colorSpace: null, hdcp: '0', aspect: null},
	{ channel: '1', inputType: null, colorSpace: null, hdcp: '0', aspect: null},
	{ channel: '2', inputType: null, colorSpace: null, hdcp: '0', aspect: null},
	{ channel: '3', inputType: null, colorSpace: null, hdcp: '0', aspect: null},
	{ channel: '4', inputType: null, colorSpace: null, hdcp: '0', aspect: null},
	{ channel: '5', inputType: null, colorSpace: null, hdcp: '0', aspect: null},
	{ channel: '6', inputType: null, colorSpace: null, hdcp: '0', aspect: null},
	{ channel: '7', inputType: null, colorSpace: null, hdcp: '0', aspect: null}
];

instance.prototype.OUTPUTS_DATA = [
	{ channel: '0', outputSelect: null, resolution: null, hdcp: '0', colorSpace: null, signal: null},
	{ channel: '1', outputSelect: null, resolution: null, hdcp: '0', colorSpace: null, signal: null},
	{ channel: '2', outputSelect: null, resolution: null, hdcp: '0', colorSpace: null, signal: null},
	{ channel: '3', outputSelect: null, resolution: null, hdcp: '0', colorSpace: null, signal: null}
];

instance.prototype.CROSSPOINTS_DATA = [
	{ channel: '0', video: null, audio: null, outputStatus: null},
	{ channel: '1', video: null, audio: null, outputStatus: null},
	{ channel: '2', video: null, audio: null, outputStatus: null},
	{ channel: '3', video: null, audio: null, outputStatus: null}
];

instance.prototype.KEYLOCK_MODES_DATA = {
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
	crossOutput4: null
}

instance.prototype.MODEL = '';
instance.prototype.VERSION = '';

instance.prototype.CHOICES_INPUTS = [
	{ id: '0', label: 'Input 1' },
	{ id: '1', label: 'Input 2' },
	{ id: '2', label: 'Input 3' },
	{ id: '3', label: 'Input 4' },
	{ id: '4', label: 'Input 5' },
	{ id: '5', label: 'Input 6' },
	{ id: '6', label: 'Input 7' },
	{ id: '7', label: 'Input 8' }
]

instance.prototype.CHOICES_INPUT_TYPES = [
	{ id: '0', label: 'HDMI' },
	{ id: '1', label: 'RGB/Component' },
	{ id: '2', label: 'Composite' },
	{ id: '3', label: 'Y/C S-Video' },
	{ id: '4', label: 'Still 1' },
	{ id: '5', label: 'Still 2' },
	{ id: '6', label: 'Still 3' },
	{ id: '7', label: 'Still 4' },
	{ id: '8', label: 'Share' }
]

instance.prototype.CHOICES_INPUT_COLORSPACES = [
	{ id: '0', label: 'Auto' },
	{ id: '1', label: 'RGB (0-255)' },
	{ id: '2', label: 'RGB (16-235)' },
	{ id: '3', label: 'YCC (SD)' },
	{ id: '4', label: 'YCC (HD)' }
]

instance.prototype.CHOICES_INPUT_CHANNELS = [
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
]

instance.prototype.CHOICES_OUTPUTS = [
	{ id: '0', label: 'Output 1' },
	{ id: '1', label: 'Output 2' },
	{ id: '2', label: 'Output 3 (XS-83 and XS-84 only)' },
	{ id: '3', label: 'Output 4 (XS-84 only)' }
]

instance.prototype.CHOICES_OUTPUT_TYPES = [
	{ id: '0', label: 'DVI-D' },
	{ id: '1', label: 'HDMI' }
]

instance.prototype.CHOICES_OUTPUT_COLORSPACES = [
	{ id: '0', label: 'Auto' },
	{ id: '1', label: 'RGB (0-255)' },
	{ id: '2', label: 'RGB (16-235)' },
	{ id: '3', label: 'YCC (444)' },
	{ id: '4', label: 'YCC (422)' }
]

instance.prototype.CHOICES_OUTPUT_RESOLUTIONS  = [
	{ id: '0', label: '480i 4:3/576i 4:3'},
	{ id: '1', label: '480i 16:9/576i 16:9'},
	{ id: '2', label: '480p 4:3/576p 4:3'},
	{ id: '3', label: '480p 16:9/576p 16:9'},
	{ id: '4', label: '720/59.94P'},
	{ id: '5', label: '1080/59.94i'},
	{ id: '6', label: '1080/59.94P'},
	{ id: '7', label: '640 x 480'},
	{ id: '8', label: '800 x 600'},
	{ id: '9', label: '1024 x 768'},
	{ id: '10', label: '1280 x 768'},
	{ id: '11', label: '1280 x 800'},
	{ id: '12', label: '1366 x 768'},
	{ id: '13', label: '1280 x 1024'},
	{ id: '15', label: '1600 x 1200'},
	{ id: '16', label: '1920 x 1200'}
]

instance.prototype.CHOICES_OUTPUT_MODES = [
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
	{ id: '22', label: 'Dual PGM-PST' }	
]

instance.prototype.CHOICES_PRESETS = [
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
	{ id: '31', label: 'Preset 32' }	
]

instance.prototype.CHOICES_EDID_RGB = [	
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
	{ id: '10', label: '1920 x 1200' }
]

instance.prototype.CHOICES_EDID_HDMI = [
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
	{ id: '25', label: '1080p' }
]

instance.prototype.CHOICES_KEYLOCKMODES = [
	{ id: '0', label: 'Crosspoint' },
	{ id: '1', label: 'Switching Mode' },
	{ id: '2', label: 'Menu + Exit' },
	{ id: '3', label: 'Cursor + Value' },
	{ id: '4', label: 'Cross - No Input' },
	{ id: '5', label: 'Cross - Off' },
	{ id: '6', label: 'Cross - Output 1' },
	{ id: '7', label: 'Cross - Output 2' },
	{ id: '8', label: 'Cross - Output 3' },
	{ id: '9', label: 'Cross - Output 4' }
]

instance.prototype.init = function() {
	let self = this;

	debug = self.debug;
	log = self.log;

	self.init_tcp();

	self.init_actions();
	self.init_feedbacks();
	self.init_variables();
	self.init_presets();

	self.checkFeedbacks();
	self.checkVariables();
}

instance.prototype.updateConfig = function(config) {
	let self = this;

	self.config = config;
	self.init_tcp();

	self.init_actions();
	self.init_feedbacks();
	self.init_variables();
	self.init_presets();

	self.checkFeedbacks();
	self.checkVariables();
}

// Return config fields for web config
instance.prototype.config_fields = function () {
	let self = this;

	return [
		{
			type: 'text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module will connect to a Roland Pro AV XS-82H, XS-83H, or XS-84H Video Processor.'
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'IP Address',
			width: 6,
			default: '192.168.0.1',
			regex: self.REGEX_IP
		}
	]
};

// When module gets deleted
instance.prototype.destroy = function() {
	let self = this;

	if (self.socket !== undefined) {
		self.socket.destroy();
	}

	clearInterval(self.INTERVAL);

	debug('destroy', self.id);
}

instance.prototype.init_tcp = function() {
	let self = this;

	if (self.socket !== undefined) {
		self.socket.destroy();
		delete self.socket;
	}

	if (self.config.port === undefined) {
		self.config.port = 8023;
	}

	if (self.config.host) {
		self.socket = new tcp(self.config.host, self.config.port);

		self.socket.on('status_change', function (status, message) {
			self.status(status, message);
		});

		self.socket.on('error', function (err) {
			debug('Network error', err);
			clearInterval(self.INTERVAL);
			self.handleError(err);
		});

		self.socket.on('connect', function () {
			debug('Connected');
			self.startInterval();
		});

		self.socket.on('data', function(buffer) {
			let indata = buffer.toString('utf8');
			//update feedbacks and variables
			self.updateData(indata);
		});

	}
};

instance.prototype.handleError = function(err) {
	let self = this;

	let error = err.toString();

	Object.keys(err).forEach(function(key) {
		if (key === 'code') {
			if (err[key] === 'ECONNREFUSED') {
				error = 'Unable to communicate with Device. Connection refused. Is this the right IP address? Is it still online?';
				self.log('error', error);
				self.status(self.STATUS_ERROR);
				if (self.socket !== undefined) {
					self.socket.destroy();
				}
			}
		}
	});
};

instance.prototype.startInterval = function() {
	let self = this;

	self.INTERVAL = setInterval(self.getData.bind(this), 5000);
}

instance.prototype.getData = function() {
	let self = this;

	if (self.socket) {
		for (let i = 0; i < 8; i++) {
			self.socket.send('ITS:' + i + ';');
		}

		for (let i = 0; i < 4; i++) {
			self.socket.send('OTS:' + i + ';');
		}

		for (let i = 0; i < 4; i++) {
			self.socket.send('CTS:' + i + ';');
		}

		self.socket.send('KLS;');
		self.socket.send('VER;');
	}
}

instance.prototype.updateData = function(data) {
	let self = this;

	let dataPrefix = data.split(':')[0];
	let dataSuffix = data.split(':')[1].replace(';','').split(',');

	switch(dataPrefix) {
		case 'ITS':
			try {
				for (let i = 0; i < self.INPUTS_DATA.length; i++) {
					if (self.INPUTS_DATA[i].channel.toString() == dataSuffix[0].toString()) {
						self.INPUTS_DATA[i].inputType = dataSuffix[1];
						self.INPUTS_DATA[i].colorSpace = dataSuffix[2];
						self.INPUTS_DATA[i].hdcp = dataSuffix[3];
						self.INPUTS_DATA[i].aspectratio = dataSuffix[4];
						break;
					}
				}
			}
			catch(error) {
				self.log('error', error);
			}
			break;
		case 'OTS':
			try {
				for (let i = 0; i < self.OUTPUTS_DATA.length; i++) {
					if (self.OUTPUTS_DATA[i].channel.toString() == dataSuffix[0].toString()) {
						self.OUTPUTS_DATA[i].outputSelect = dataSuffix[1];
						self.OUTPUTS_DATA[i].resolution = dataSuffix[2];
						self.OUTPUTS_DATA[i].hdcp = dataSuffix[3];
						self.OUTPUTS_DATA[i].colorSpace = dataSuffix[4];
						self.OUTPUTS_DATA[i].signal = dataSuffix[5];
						break;
					}
				}
			}
			catch(error) {
				self.log('error', error);
			}
			break;
		case 'CTS':
			try {
				for (let i = 0; i < self.CROSSPOINTS_DATA.length; i++) {
					if (self.CROSSPOINTS_DATA[i].channel.toString() == dataSuffix[0].toString()) {
						self.CROSSPOINTS_DATA[i].video = dataSuffix[1];
						self.CROSSPOINTS_DATA[i].audio = dataSuffix[2];
						self.CROSSPOINTS_DATA[i].outputStatus = dataSuffix[3];
						break;
					}
				}
			}
			catch(error) {
				self.log('error', error);
			}
			break;
		case 'KLS':
			try {				
				self.KEYLOCK_MODES_DATA.lockStatus = dataSuffix[0];
				self.KEYLOCK_MODES_DATA.crossPoint = dataSuffix[1];
				self.KEYLOCK_MODES_DATA.switchMode = dataSuffix[2];
				self.KEYLOCK_MODES_DATA.menuExit = dataSuffix[3];
				self.KEYLOCK_MODES_DATA.cursorValue = dataSuffix[4];
				self.KEYLOCK_MODES_DATA.crossNoInput = dataSuffix[5];
				self.KEYLOCK_MODES_DATA.crossOff = dataSuffix[6];
				self.KEYLOCK_MODES_DATA.crossOutput1 = dataSuffix[7];
				self.KEYLOCK_MODES_DATA.crossOutput2 = dataSuffix[8];
				self.KEYLOCK_MODES_DATA.crossOutput3 = dataSuffix[9];
				self.KEYLOCK_MODES_DATA.crossOutput4 = dataSuffix[10];
			}
			catch(error) {
				self.log('error', error);
			}
			break;
		case 'VER':
			try {
				self.MODEL = dataSuffix[0];
				self.VERSION = dataSuffix[1];
			}
			catch(error) {
				self.log('error', error);
			}
			break;
	}

	self.checkFeedbacks();
	self.checkVariables();
};

// ##########################
// #### Instance Actions ####
// ##########################
instance.prototype.init_actions = function (system) {
	this.setActions(actions.setActions.bind(this)());
};

// ############################
// #### Instance Feedbacks ####
// ############################
instance.prototype.init_feedbacks = function (system) {
	this.setFeedbackDefinitions(feedbacks.setFeedbacks.bind(this)());
};

// ############################
// #### Instance Variables ####
// ############################
instance.prototype.init_variables = function () {
	this.setVariableDefinitions(variables.setVariables.bind(this)());
};

// Setup Initial Values
instance.prototype.checkVariables = function () {
	variables.checkVariables.bind(this)();
};

// ##########################
// #### Instance Presets ####
// ##########################
instance.prototype.init_presets = function () {
	this.setPresetDefinitions(presets.setPresets.bind(this)());
};

instance.prototype.sendCommand = function(cmd) {
	let self = this;

	if (cmd !== undefined) {
		if (self.socket !== undefined && self.socket.connected) {
			self.socket.send(cmd);
		}
		else {
			debug('Socket not connected :(');
		}
	}
}

instance_skel.extendedBy(instance);
exports = module.exports = instance;