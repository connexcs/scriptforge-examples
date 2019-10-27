const send = require('cxSend');

function main(vars) {
	return send.email({
		to: 'joe@blogs.com',
		template: 'scriptforge',
		vars: {
			name:		'Joe Bloggs',
		}
	})
}

/* Don't forget to add a template from Setup > Settings > Templates */
