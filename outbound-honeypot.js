const {kv, incr} = require('cxKV');

const MAX_ATTEMPTS = 3;
const CHECK_PERIOD = 2; // Minutes
const BLOCK_PERIOD = 30; // Minutes

async function main (data) {
	const key = `${data.routing.account_id}:${data.routing.dest_number}`;
	const counter = await kv.get(key);
	if (counter >= MAX_ATTEMPTS) {
		 throw new Error('603 Destination Blocked');
	}
	var incValue = await incr(key, 1, CHECK_PERIOD * 60);
	if (incValue >= MAX_ATTEMPTS) {
		await incr(key, 100, BLOCK_PERIOD * 60);
	}
	return data;
}
