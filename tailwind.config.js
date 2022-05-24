module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			'sweet-sans-pro': ['Sweet Sans Pro', 'arial'],
			'messapia': ['Messapia', 'arial'],
			'agrandir-grand': ['Agrandir Grand', 'arial']
		},
		extend: {
			colors: {
				belorange: '#FD4000',
				belvert: '#23EB83',
				belrose: '#F19CAE',
				belviolet: '#4E4898',
				belbeige: '#FDF9F3',
			},
			// cursor: {
			// 	belcustom: 'url("../public/bCursor.svg"), pointer',
			// },
			animation: {
				changeColor: 'changeColor 1.5s ease infinite',
			},
			keyframes: {
				changeColor: {
					'0%': { color: '#FD4000' },
					'25%': { color: '#23EB83' },
					'50%': { color: '#F19CAE' },
					'75%': { color: '#4E4898' },
					'100%': { color: '#FD4000' },
				},
			},
		},
	},
	plugins: [],
};
