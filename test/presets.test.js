const test = require('node:test')
const assert = require('node:assert/strict')

const { initPresets } = require('../src/presets')

test('crosspoint presets use the current Companion action and feedback schema', () => {
	let definitions
	const instance = {
		CHOICES_INPUTS: [{ id: '0', label: 'Input 1' }],
		CHOICES_OUTPUTS: [{ id: '0', label: 'Output 1' }],
		setPresetDefinitions: (presets) => {
			definitions = presets
		},
	}

	initPresets.call(instance)

	const crosspoint = definitions.find(
		(preset) => preset.category === 'Crosspoints',
	)
	assert.ok(crosspoint)
	assert.equal(
		crosspoint.actions[0].actionId,
		'outputchannel_inputchannel_audioandvideo',
	)
	assert.equal(crosspoint.actions[0].action, undefined)
	assert.equal(crosspoint.feedbacks[0].feedbackId, 'crosspoint')
	assert.equal(crosspoint.feedbacks[0].type, undefined)
})
