/*
 Script: PIN Verification.
 Description: PIN verification using IVR audio file
 Usage: Class 5 Programmable voice application
*/

const { kv } = require('cxKV');

async function main(data, ctx) {
	const cli = ctx.get('sip_from_user') || 'unknown';
	console.log(`CLI via SIP header: ${cli}`);


	const maxAttempts = 3;

	try {
		await ctx.answer();
		await ctx.tts('Welcome to the secure system.');

		for (let attempt = 1; attempt <= maxAttempts; attempt++) {
			
			const { status, value } = await ctx.ivr('ivr/ivr-aint_nobody_got_time_for_that.wav', 10, 4, 4); //Replace the audio file.

			console.log(`PIN Entry Attempt ${attempt}: status=${status}, value=${value}`);

			if (status === 'success') {
				const isValid = await validatePIN(cli, value);

				if (isValid) {
					await ctx.tts('PIN verified successfully. Welcome!');
					await grantAccess(data, ctx);
					return;
				} else {
					if (attempt < maxAttempts) {
						await ctx.tts('Invalid PIN. Please try again.');
					} else {
						await ctx.tts('Too many failed attempts. Access denied.');
						await logFailedAttempt(cli);
						await ctx.hangup();
						return;
					}
				}
			} else {
				await ctx.tts('No PIN entered. Please try again.');
			}
		}

		await ctx.hangup();
	} catch (error) {
		console.error('Script error:', error);
		await ctx.tts('System error. Please try again later.');
		await ctx.hangup();
	}
}

async function validatePIN(cli, pin) {
	const storedPin = await kv.get(`pin_${cli}`);
	if (!storedPin) {
		return pin === '1234'; // Default fallback
	}
	return pin === storedPin;
}