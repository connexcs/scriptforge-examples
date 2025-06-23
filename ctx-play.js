/*
  Script: ctx.play
  Description: Play one or more audio files to the caller.
  Usage:
    - Set this as a Class 5 Destination.
    - Files must exist in your audio library (e.g., user/ or ivr/ folders).
*/

async function main(data, ctx) {
  await ctx.answer(); // Answer the incoming call before playing audio

  // Play a custom greeting uploaded via Management > Files > Audio
  await ctx.play('user/welcome.wav');

  // Play a fun IVR clip from the default library
  await ctx.play('ivr/ivr-aint_nobody_got_time_for_that.wav');
}