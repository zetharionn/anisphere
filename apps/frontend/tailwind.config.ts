import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
		'../../node_modules/@nextui-org/theme/dist/**/*.{js,jsx,ts,tsx}'
	],
	darkMode: 'class',
	plugins: [
		nextui({
			defaultTheme: 'dark',
			defaultExtendTheme: 'dark',
			themes: {
				dark: {
					colors: {
						background: '#0f0f11',
						foreground: '#fbfbfb',
						divider: '#413e46',
						overlay: '#0f0f11',
						focus: '#2f2f34',
						default: '#7900d6',
						primary: '#9000fe',
						secondary: '#8400ff',
						success: '#4af236',
						warning: '#ffa500',
						danger: '#ff3d3d'
					}
				}
			}
		})
	]
} satisfies Config
