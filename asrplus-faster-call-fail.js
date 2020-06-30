/*
ASRPlus is a ConnexCS feature for reducing unecessary attempts and providing faster fails on calls. It is most suitable for agressive call-center traffic profiles.
*/


function main(vars){
	if (!vars.routing) vars.routing = {};
	return api.lookup.asrplus(vars.routing.dest_number).then(function(asrplusData){
		if (asrplusData.status && asrplusData.status =='Invalid'){
			return Promise.reject([604, "Number not Found (ASRPlus)"]);
		} else {
		  	vars.routing.asrPlus = asrplusData;
			return Promise.resolve(vars.routing);
		}
	});
}
