const userspace = require('cxUserspace');

function main(data){
	return userspace.create('dnc', data["Caller-Caller-ID-Number"].replace('+', ''), + new Date()).then(() => {
		if (!data.routing) data.routing = {};
		return [{key: "x-tts", value: "Thank you, you have been added to our D N C list you won't be called by us again."}];
	}).catch(err => {
		console.error(err)
		return Promise.reject([500, err]);
	});
}
