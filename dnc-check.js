const userspace = require('cxUserspace');

function main(vars){
	return userspace.read('dnc', vars.routing.dest_number).then(data => {
		if (data) return Promise.reject([604, 'Number on DNC List']);
			return vars
		}).catch(err => {
			if (Array.isArray(err)) return Promise.reject(err);
			return Promise.reject([500, err]);
		});
}
