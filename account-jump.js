/*
  This function will allow a call that comes in on a "shared", CLI to be sent to the Class 5 system
  impersonating a different customer. The customer will be chosen based upon a pre-entered CLI.
  
  This technique allows the system to then be used for pinless calling card services
*/

const rest = require('cxRest');
const helper = require('cxHelper');

async function main(data){
	var clis = await rest.auth("api@yourdomain.com").get('cli', {cli: data.routing.cli});
	if (!clis.length) throw new Error('401 CLI Not Authorized');
	
	data.routing.egress_routing.forEach(row => {
		var kvCustomerId = row.headers.find(hdr => hdr.key === 'X-Customer-ID')
		kvCustomerId.value = clis[0].company_id

		var kvCxSec = row.headers.find(hdr => hdr.key === 'X-CX-Sec')
		kvCxSec.value = helper.generatePbxSecurityKey(clis[0].company_id, data.routing.server);
	})
	
	return data;
}
