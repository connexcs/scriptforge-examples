/*
  Script: ctx.set & ctx.get Example
  Description: Sets a variable and then retrieves it.
 
   Usage:
    1. Go to Script > Edit > Class 5 Destination.
    2. Add a destination pointing to this script.
    3. Route calls to this destination via an internal route.
	- Demonstrates setting and reading call variables during a call.
*/

async function main(data, ctx) {
	// Set a custom variable
	await ctx.set('greeting', 'Hello from ConnexCS');

	// Retrieve the variable
	const message = await ctx.get('greeting');

	// Log it (for debugging purposes)
	console.log('Greeting message:', message);

	// Optionally speak the value to the caller
	await ctx.answer();
	await ctx.tts(message);
	await ctx.tts(message);
}