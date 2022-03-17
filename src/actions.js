module.exports = {
	// ##########################
	// #### Instance Actions ####
	// ##########################
	setActions: function () {
		let self = this;
		let actions = {};

		actions.inputchannel_video_type = {
			label: 'Set video input channel signal type',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'dropdown',
					label: 'Type',
					id: 'type',
					default: '0',
					choices: self.CHOICES_INPUT_TYPES
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VIS:' + options.input + ',' + options.type + ';';
				self.sendCommand(cmd);
			}
		}

		actions.inputchannel_video_colorspace = {
			label: 'Set video input channel color space',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'dropdown',
					label: 'Color Space',
					id: 'colorspace',
					default: '0',
					choices: self.CHOICES_INPUT_COLORSPACES
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VIC:' + options.input + ',' + options.colorspace + ';';
				self.sendCommand(cmd);
			}
		}

		actions.inputchannel_video_hdcp = {
			label: 'Enable/Disable Input Channel HDCP',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'dropdown',
					label: 'HDCP Enable/Disable',
					id: 'hdcp',
					default: '0',
					choices:
					[
						{ id: '0', label: 'Disable'},
						{ id: '1', label: 'Enable'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VIH:' + options.input + ',' + options.hdcp + ';';
				self.sendCommand(cmd);
			}
		}

		actions.inputchannel_video_aspectratio = {
			label: 'Set video input channel aspect ratio',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'dropdown',
					label: 'Aspect Ratio',
					id: 'aspectratio',
					default: '0',
					choices:
					[
						{ id: '0', label: 'Full'},
						{ id: '1', label: 'Letterbox'},
						{ id: '2', label: 'Crop'},
						{ id: '3', label: 'Dot by Dot'},
						{ id: '4', label: 'Manual'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VIA:' + options.input + ',' + options.aspectratio + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_outputselect = {
			label: 'Set output select for a video output channel',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'Output Select',
					id: 'outputselect',
					default: '0',
					choices:
					[
						{ id: '0', label: 'Auto'},
						{ id: '1', label: 'HDMI'},
						{ id: '2', label: 'HDBaseT'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VOS:' + options.output + ',' + options.outputselect + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_resolution = {
			label: 'Set output resolution for a video output channel',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'Output Resolution',
					id: 'resolution',
					default: '0',
					choices: self.CHOICES_OUTPUT_RESOLUTIONS
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VOR:' + options.output + ',' + options.resolution + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_video_hdcp = {
			label: 'Enable/Disable Output Channel HDCP',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'HDCP Enable/Disable',
					id: 'hdcp',
					default: '0',
					choices:
					[
						{ id: '0', label: 'Disable'},
						{ id: '1', label: 'Enable'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VOH:' + options.output + ',' + options.hdcp + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_video_colorspace = {
			label: 'Set video output channel color space',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'Color Space',
					id: 'colorspace',
					default: '0',
					choices: self.CHOICES_OUTPUT_COLORSPACES
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VOC:' + options.output + ',' + options.colorspace + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_video_signaltype = {
			label: 'Set video output channel signal type',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'Type',
					id: 'type',
					default: '0',
					choices: self.CHOICES_OUTPUT_TYPES
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'VOD:' + options.output + ',' + options.type + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_inputchannel_audioandvideo = {
			label: 'Select input channel audio and video for an output',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'Input Channel (Audio and Video)',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'OAV:' + options.output + ',' + options.input + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_inputchannel_video = {
			label: 'Select input channel video for an output',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'Input Channel (Video Only)',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'OVS:' + options.output + ',' + options.input + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_inputchannel_audio = {
			label: 'Select input channel audio for an output',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'Input Channel (Audio Only)',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'OAS:' + options.output + ',' + options.input + ';';
				self.sendCommand(cmd);
			}
		}

		actions.outputchannel_onoff = {
			label: 'Turn an output on or off',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'On or Off',
					id: 'value',
					default: '0',
					choices: [
						{ id: '0', label: 'On'},
						{ id: '1', label: 'Off'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'OFS:' + options.output + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.audiolevel_hdmiinput = {
			label: 'Set the audio input level of an HDMI input',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'textinput',
					label: 'Level (0 - 127)',
					id: 'value',
					default: '0'
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'IDL:' + options.input + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.audiolevel_audioinput = {
			label: 'Set the audio input level of an Audio input',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'textinput',
					label: 'Level (0 - 127)',
					id: 'value',
					default: '0'
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'IAL:' + options.input + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.audiolevel_output = {
			label: 'Set the audio level of an output',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'textinput',
					label: 'Level (0 - 127)',
					id: 'value',
					default: '0'
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'OAL:' + options.output + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.mute_hdmi_onoff = {
			label: 'Set mute on/off for an HDMI input',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'dropdown',
					label: 'On or off',
					id: 'value',
					default: '0',
					choices: [
						{ id: '0', label: 'Off'},
						{ id: '1', label: 'On'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'IDM:' + options.input + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.mute_audio_onoff = {
			label: 'Set mute on/off for an Audio input',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'dropdown',
					label: 'On or off',
					id: 'value',
					default: '0',
					choices: [
						{ id: '0', label: 'Off'},
						{ id: '1', label: 'On'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'IAM:' + options.input + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.mute_output_onoff = {
			label: 'Set mute on/off for an output',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'input',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'On or off',
					id: 'value',
					default: '0',
					choices: [
						{ id: '0', label: 'Off'},
						{ id: '1', label: 'On'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'OAM:' + options.output + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.audio_output_delay = {
			label: 'Set audio output delay time',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Channel',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'textinput',
					label: 'Level (0 - 170) in milliseconds',
					id: 'value',
					default: '0'
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'ADT:' + options.output + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.video_outputmode = {
			label: 'Set video output mode',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output Mode',
					id: 'mode',
					default: '0',
					choices: self.CHOICES_OUTPUT_MODES
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'MOD:' + options.mode + ';';
				self.sendCommand(cmd);
			}
		}

		actions.recall_preset = {
			label: 'Recall Preset',
			options:
			[
				{
					type: 'dropdown',
					label: 'Recall Preset',
					id: 'preset',
					default: '0',
					choices: self.CHOICES_PRESETS
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'PSE:' + options.preset + ';';
				self.sendCommand(cmd);
			}
		}
		
		//implement auto command here later
		
		actions.audio_sendlevel = {
			label: 'Set the send level for audio sent to an output',
			options:
			[
				{
					type: 'dropdown',
					label: 'Output',
					id: 'output',
					default: '0',
					choices: self.CHOICES_OUTPUTS
				},
				{
					type: 'dropdown',
					label: 'Input',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUT_CHANNELS
				},
				{
					type: 'textinput',
					label: 'Send Rate (0 - 100)',
					id: 'value',
					default: '0'
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd;
				switch(options.output) {
					case '0':
						cmd = 'ASA:';
						break;
					case '1':
						cmd = 'ASB:';
						break;
					case '2':
						cmd = 'ASC:';
						break;
					case '3':
						cmd = 'ASD:';
						break;
				}
				cmd += options.input + ',' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.edid_rgb = {
			label: 'Set the EDID for an RGB Input',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'dropdown',
					label: 'EDID',
					id: 'edid',
					default: '0',
					choices: self.CHOICES_EDID_RGB
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'AED:' + options.input + ',' + options.edid + ';';
				self.sendCommand(cmd);
			}
		}

		actions.edid_hdmi = {
			label: 'Set the EDID for an HDMI Input',
			options:
			[
				{
					type: 'dropdown',
					label: 'Input',
					id: 'input',
					default: '0',
					choices: self.CHOICES_INPUTS
				},
				{
					type: 'dropdown',
					label: 'EDID',
					id: 'edid',
					default: '0',
					choices: self.CHOICES_EDID_HDMI
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'DED:' + options.input + ',' + options.edid + ';';
				self.sendCommand(cmd);
			}
		}

		actions.panel_lock = {
			label: 'Set panel lock',
			options:
			[
				{
					type: 'dropdown',
					label: 'On or Off',
					id: 'value',
					default: '0',
					choices: [
						{ id: '0', label: 'Off'},
						{ id: '1', label: 'On'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'PLS:' + options.value + ';';
				self.sendCommand(cmd);
			}
		}

		actions.key_lock_mode = {
			label: 'Set Key Lock Mode',
			options:
			[
				{
					type: 'dropdown',
					label: 'Key Lock Mode',
					id: 'mode',
					default: '0',
					choices: self.CHOICES_KEYLOCKMODES
				},
				{
					type: 'dropdown',
					label: 'On or Off',
					id: 'value',
					default: '0',
					choices: [
						{ id: '0', label: 'Off'},
						{ id: '1', label: 'On'}
					]
				}
			],
			callback: function(action, bank) {
				let options = action.options;
				let cmd = 'KLM:' + options.mode + ',' + options.edid + ';';
				self.sendCommand(cmd);
			}
		}

		return actions
	}
}