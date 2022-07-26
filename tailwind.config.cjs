/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				'ticktick': {
					primary: '#4772fa',
					'primary-focus': '#6a8ef6',
					'primary-content': '#ffffff',
          'secondary-content': '#000000',
          'base-content': '#191919',
          'base-100': '#ffffff',
          error: '#dc2626',
          info: '#2563eb',
          neutral: '#3b8ac4',
          secondary: '#f0f4ff',
          success: '#16a34a',
          warning: '#d97706',
				}
			}
		]
	}
};
