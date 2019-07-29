module.export = {
	search: async function ({number}) {
		// Returns Array of Objects, e.g [{did:'1234'}]
	},
	allocate: async function ({did}) {
		// The information returned by this function will be passed to 
		// https://api-docs.connexcs.com/#api-Did-Create
	},
	release: async function ({did}) {
		// Returns True / False
	},
	list: async function () {
		// Returns Array of Objects, e.g [{did:'1234'}]
	}
}
