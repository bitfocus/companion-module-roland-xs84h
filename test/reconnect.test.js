const test = require('node:test')
const assert = require('node:assert/strict')
const api = require('../src/api')

test('ECONNRESET leaves the reconnecting helper alive', () => {
	let destroyed = false
	const logs = []
	const instance = {
		socket: { destroy: () => (destroyed = true) },
		log: (level, message) => logs.push({ level, message }),
	}

	api.handleError.call(instance, Object.assign(new Error('reset'), { code: 'ECONNRESET' }))

	assert.equal(destroyed, false)
	assert.deepEqual(logs, [
		{
			level: 'warn',
			message: 'The connection was reset. Waiting for the device to become available again.',
		},
	])
})

test('startInterval replaces an existing poll timer', (t) => {
	t.mock.timers.enable(['setInterval'])
	let polls = 0
	const instance = {
		RATE: 1000,
		INTERVAL: undefined,
		log() {},
		getData: () => polls++,
		stopInterval: api.stopInterval,
	}

	api.startInterval.call(instance)
	const firstTimer = instance.INTERVAL
	api.startInterval.call(instance)

	assert.notEqual(instance.INTERVAL, firstTimer)
	t.mock.timers.tick(1000)
	assert.equal(polls, 1)
	api.stopInterval.call(instance)
})

test('getData does not write while disconnected', () => {
	let sends = 0
	api.getData.call({ socket: { isConnected: false, send: () => sends++ } })
	assert.equal(sends, 0)
})
