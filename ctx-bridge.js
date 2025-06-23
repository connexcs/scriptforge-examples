/*
  Script: ctx.bridge
  Description: Bridge the call to another destination (e.g., internal extension or external number).
  Usage:
    1. Go to Script > Edit > Class 5 Destination.
    2. Add a destination pointing to this script.
    3. Route calls to this destination via an internal route.
*/

async function main(data, ctx) {
  // Example: Bridge to an internal extension or external number
  await ctx.bridge('441234567890');
}
