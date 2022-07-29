/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#4772fa',
				'primary-focus': '#6a8ef6',
				'primary-content': '#ffffff',
				sidebar: '#f0f4ff',
				'info-gray': '#f3f3f3',
				'extra': '#757575',
				'lighter-extra': '#a3a3a3',
				'item-selected': '#ecf1ff',
				'item-hovered': '#f5f8ff',
				'secondary-content': '#000000',
				'base-content': '#191919',
				'base-100': '#ffffff',
				error: '#dc2626',
				info: '#2563eb',
				neutral: '#3b8ac4',
				success: '#16a34a',
				warning: '#d97706'
			}
		}
	},
	plugins: [],
	safelist: []
};
