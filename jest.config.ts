import { Config } from "jest";

const config: Config = {
	transform: {
		"^.+\\.ts?$": "ts-jest"
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)'],
	moduleNameMapper: {
		'^axios$': require.resolve('axios'),
	  },
};

export default config;