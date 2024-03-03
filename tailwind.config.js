/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#000000",
				brand: "#429A7D",
				secondary: "#f7e503",
				"black-100": "#161616",
				"brand-100": "#194d3b",
				"brand-200": "#7ae5c2",
				"brand-300": "#45917d",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 0px 20px -15px #211e35 ",
			},
			screens: {
				xs: "450px",
			},
			// backgroundImage: {
			// 	"hero-pattern": "url('/src/assets/herobg.png')",
			// },
			fontFamily: {
				bold: "MontserratBold",
				regular: "MontserratRegular",
				medium: "MontserratMedium",
				light: "MontserratLight",
			},
		},
	},
	plugins: [],
};
