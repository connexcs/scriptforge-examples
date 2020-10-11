/*
  Class 5 Programmable Voice Application
  Answers the call asks the user for a phone number to dial. The call then gets sent out
  through egress routes on the same account.
*/

async function main(data, ctx) {
	await ctx.answer();
	var {status, value} = await ctx.ivr('user/calling_card_ivr.wav', 20, 10, 15);
	await ctx.bridge(value);
}
