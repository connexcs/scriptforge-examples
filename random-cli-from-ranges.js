/*
 * Choose a random CLI from a range of number ranges passed in as a variable.
 */

function main (vars) {
	const [start, end] = vars.cli.range[Math.floor(Math.random() * vars.cli.range.length)];

	vars.routing.cli = start + Math.floor(Math.random() * (1 + end - start));
	
	if (vars.routing.egress_routing) {
		vars.routing.egress_routing.forEach(er => {
			if (er.gw) {
				Object.keys(er.gw).forEach(id => {
					er.gw[id].cli = vars.routing.cli;
				});
			}
		});
	}
	return vars;
}

/*
Example TOML Configuration to be set in customer or route vars

An example of how this should look is this.
[cli]
range = [
  [1000, 2000],
  [6000, 8000]
]

Or if it is only a single range you want to add:

[cli]
range = [
  [100, 200]
]


*/
