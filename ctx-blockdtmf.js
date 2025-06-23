 /*
  Script: ctx.blockDtmf
  Description: Blocks all DTMF input during the call. 
  Usage:
    1. Go to Script > Edit > Class 5 Destination.
    2. Add a destination pointing to this script.
    3. Route calls to this destination via an internal route.
*/

async function main(data, ctx) {
  
  // Block DTMF inputs
  await ctx.blockDtmf();

  // Continue with call logic if needed
}