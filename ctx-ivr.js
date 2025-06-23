/*
  Script: IVR with timeout routing
  Description: Play prompt, collect 1-digit DTMF input.
*/

async function main(data, ctx) {
	await ctx.answer();

	const { status, value } = await ctx.ivr('user/welcome.wav', 15, 1, 1, '#');
	console.log(`DTMF status: ${status}, value: ${value}`);

	if (!value) {
		await ctx.tts("No input received. Transferring your call.");
		await ctx.bridge('1001'); // Fallback extension
	} else if (value === '1') {
		await ctx.tts("You pressed 1. Routing your call.");
		await ctx.bridge('1002');
	} else {
		await ctx.tts(`You pressed ${value}.`);
		await ctx.hangup();
	}
}
