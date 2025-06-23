/*
  Script: ctx.answer
  Description: Answers an incoming call.
  Usage:
    1. Go to Script > Edit > Class 5 Destination.
    2. Add a destination pointing to this script.
    3. Route calls to this destination via an internal route.
*/

async function main(data, ctx) {
  
  // Answer the call
  await ctx.answer();

  // You can add more logic here, such as IVR, playing audio, etc.
}
