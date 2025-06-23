/*
  Script: ctx Example
  Description: Example using ctx to answer call, speak and hang up
  Usage: To use this script, go to Script > Edit > Class 5 Destination, add a new destination pointing to this script. Then route customer calls to it via an internal route.
*/

async function main(data, ctx) {
  await ctx.answer();
  await ctx.tts('Call was successful. Hello World!');
  await ctx.hangup();
}