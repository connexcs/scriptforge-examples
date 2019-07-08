const rest = require('cxRest')

function main(data){
	return rest.auth("api@yourdomain.com").get('customer');
}
