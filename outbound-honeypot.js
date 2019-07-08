const userspace = require('cxUserspace');

async function main(data){
	var res = await userspace.read('blocked', data.routing.dest_number);
	if (res) {
		console.log(+ new Date(), Number(res.value) + 86400000);
		if (+ new Date() > Number(res.value) + 86400000) { // Expired
			await userspace.delete('blocked', data.routing.dest_number, + new Date());
			return data;
		} else {
			throw new Error('603 Blocked');
		}
	}

	var callonce = await userspace.read('callonce', data.routing.dest_number);
	if (!callonce) {
		await userspace.create('callonce', data.routing.dest_number, JSON.stringify([{dt: + new Date()}]))
		return data;
	}
	callonce = JSON.parse(callonce.value);

	callonce = callonce.filter(row => {
		return row.dt > (+ new Date()) - 3600000
	})
	console.log(callonce);
	
	if (callonce.length < 5) {
		callonce.push({dt: + new Date()});
		var x = await userspace.update('callonce', data.routing.dest_number, {value: JSON.stringify(callonce)})
		console.log(x);
		return data;
	}
	
	await userspace.delete('callonce', data.routing.dest_number, + new Date());
	await userspace.create('blocked', data.routing.dest_number, + new Date())
	throw new Error('603 Blocked');
}
