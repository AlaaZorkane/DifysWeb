export default {
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		titleTemplate: "%s - headless dofus touch botting client",
		title: "Difys",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "Difys",
				name: "headless dofus touch botting client",
				content: process.env.npm_package_description || ""
			}
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Comfortaa:300,400,500,600,700|Oxygen:300,400,700"
			}
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#fff" },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ["~/plugins/VueClipboard"],
	/*
	 ** Nuxt.js modules
	 */
	modules: ["@nuxtjs/vuetify", "@nuxtjs/eslint-module"],
	/*
	 ** vuetify module configuration
	 ** https://github.com/nuxt-community/vuetify-module
	 */
	vuetify: {
		theme: {
			primary: "#151515",
			accent: "#707070",
			secondary: "#ffffff",
			info: "#54428e",
			warning: "#ffc107",
			error: "#db504a",
			success: "#00e676"
		}
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	}
}
