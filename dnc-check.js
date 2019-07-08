const userspace = require('cxUserspace');

function main(data){
	return userspace.read('dnc', data.routing.dest_number).then(data => {
		if (data) return Promise.reject([604, 'Number on DNC List']);
			return data
		}).catch(err => {
			if (Array.isArray(err)) return Promise.reject(err);
			return Promise.reject([500, err]);
		});
}
