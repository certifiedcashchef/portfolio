/** @type {import('tailwindcss').Config} */




const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {

		fontFamily: {
			sans: ["UrbanistVariable", "Urbanist", ...defaultTheme.fontFamily.sans],
		  },
		  fontWeight: {
			thin: 100,
			extralight: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
		  },
		  fontStyle: {
			normal: "normal",
			italic: "italic",
		  },
	

	},
  },
  plugins: [],
};
