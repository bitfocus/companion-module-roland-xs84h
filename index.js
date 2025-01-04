const { InstanceBase, InstanceStatus, runEntrypoint } = require('@companion-module/base')

const UpgradeScripts = require('./src/upgrades')

const configFields = require('./src/configFields')
const constants = require('./src/constants')
const api = require('./src/api')
const actions = require('./src/actions')
const feedbacks = require('./src/feedbacks')
const variables = require('./src/variables')
const presets = require('./src/presets')

class RolandXS84HInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		// Assign the methods from the listed files to this class
		Object.assign(this, {
			...configFields,
			...constants,
			...api,
			...actions,
			...feedbacks,
			...variables,
			...presets,
		})
	}

	async init(config) {
		this.configUpdated(config)
	}

	async configUpdated(config) {
		this.config = config

		this.initActions()
		this.initFeedbacks()
		this.initVariables()
		this.initPresets()

		this.checkFeedbacks()
		this.checkVariables()

		this.updateStatus(InstanceStatus.Connecting)

		this.initConnection()
	}

	async destroy() {
		if (this.socket !== undefined) {
			this.socket.destroy()
		}

		clearInterval(this.INTERVAL)

		this.debug('destroy', this.id)
	}
}

runEntrypoint(RolandXS84HInstance, UpgradeScripts)
