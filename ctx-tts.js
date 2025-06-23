/*
  Script: ctx.tts
  Description: Use TTS (Text-to-Speech) to speak a message.
*/

async function main(data, ctx) {
  await ctx.answer(); // Required before playing audio or TTS

  // Use TTS to speak a message
  await ctx.tts('Thank you for calling. Please wait while we connect you.');
}
