import type { StorybookConfig } from '@storybook/react-vite'

import { dirname, join } from 'node:path'

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@chromatic-com/storybook'),
		getAbsolutePath('@storybook/addon-interactions')
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {}
	}
}
export default config
