function main (data){
	data.routing.egress_routing.headers = [
		{key: 'X-Timestamp', value: + Date()}
	];
	return data;
}
