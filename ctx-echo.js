/*
  Script: ctx.echo
  Description: Echo the call — sends audio back to the caller for testing.
  Usage:
    1. Go to Script > Edit > Class 5 Destination.
    2. Add a destination pointing to this script.
    3. Route calls to this destination via an internal route.
    - You can use this for audio loopback tests or troubleshooting RTP/media paths.
*/

async function main(data, ctx) {
  await ctx.echo(); 
}