function main (vars){
	var cliList = ['1111111', '2222222', '3333333', '4444444'];
	vars.routing.cli = cliList[Math.floor(Math.random() * cliList.length)];
	if (vars.routing.egress_routing) {
		vars.routing.egress_routing.forEach(er => {
			Object.keys(er.gw).forEach(id => {
				er.gw[id].cli = vars.routing.cli;
			})
		})
	}
	return vars;
}
