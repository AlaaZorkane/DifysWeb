window.$docsify = {
	name: "difys/documentation",
	repo: "https://github.com/AlaaZorkane/Difys",
	subMaxLevel: 2,
	notFoundPage: "404.md",
	loadSidebar: true,
	alias: {
		"/.*/_sidebar.md": "/_sidebar.md"
	},
	search: {
		maxAge: 86400000,
		paths: [],
		placeholder: "Type to search",
		noData: "No Results! Maybe try discord?",
		hideOtherSidebarContent: false
	},
	homepage: "getting-started/quick-start.md",
	themeable: {
		readyTransition: true,
		responsiveTables: true
	}
}
