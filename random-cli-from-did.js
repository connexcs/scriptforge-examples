const rest = require('cxRest');
const api = rest.auth("api@api.com"); 

async function main() {
	var rows = (await api.get('did', {customer_id: vars.routing.account_id})).map(row => row.did);
	vars.routing.cli = rows[Math.floor(Math.random() * rows.length)];
	if (vars.routing.egress_routing) {
		vars.routing.egress_routing.forEach(er => {
			Object.keys(er.gw).forEach(id => {
				er.gw[id].cli = vars.routing.cli;
			});
		});
	}
	return vars;
} 
