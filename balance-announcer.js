/*
 Script: Customer Credit Balance Announcer USing SIP users
 Description: Announces a customer's credit balance in words using currency and subunit names.
 Usage: Class 5 programmable voice application with TTS support.
*/

const cxRest = require('cxRest');
const rest = cxRest.auth('api@test.com'); //Replace the api user.

// Currency and subunit names
const currencyMap = {
	NGN: { major: 'naira', minor: 'kobo' },
	USD: { major: 'dollar', minor: 'cent' },
	GBP: { major: 'pound', minor: 'pence' },
	EUR: { major: 'euro', minor: 'cent' },
	INR: { major: 'rupee', minor: 'paise' },
};

// Convert numbers to words (up to billions)
function numberToWords(n) {
	const a = [
		'', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
		'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
		'sixteen', 'seventeen', 'eighteen', 'nineteen'
	];
	const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	if (n === 0) return 'zero';
	if (n < 20) return a[n];
	if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? '-' + a[n % 10] : '');
	if (n < 1000) return a[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' and ' + numberToWords(n % 100) : '');
	if (n < 1000000) return numberToWords(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ', ' + numberToWords(n % 1000) : '');
	if (n < 1000000000) return numberToWords(Math.floor(n / 1000000)) + ' million' + (n % 1000000 ? ', ' + numberToWords(n % 1000000) : '');
	return numberToWords(Math.floor(n / 1000000000)) + ' billion' + (n % 1000000000 ? ', ' + numberToWords(n % 1000000000) : '');
}

async function main(data, ctx) {
	try {
		const customerId = ctx.get('sip_h_X-Customer-ID');
		if (!customerId) {
			console.error('Customer ID header missing');
			return await ctx.tts('Customer ID not found.');
		}

		const customerData = await rest.get(`customer/${customerId}`);
		const credit = parseFloat(customerData.credit);
		const currency = customerData.currency || 'USD';

		if (isNaN(credit)) {
			console.error('Invalid credit value:', customerData.credit);
			return await ctx.tts('Invalid credit balance.');
		}

		const { major, minor } = currencyMap[currency] || { major: currency.toLowerCase(), minor: 'subunits' };

		const absCredit = Math.abs(credit);
		const majorUnit = Math.floor(absCredit);
		const minorUnit = Math.floor((absCredit - majorUnit) * 100);

		let message = '';

		if (credit < 0) {
			if (majorUnit === 0 && minorUnit > 0) {
				message = `You owe ${numberToWords(minorUnit)} ${minor}.`;
			} else {
				message = `You owe ${numberToWords(majorUnit)} ${major}` +
					(minorUnit ? ` and ${numberToWords(minorUnit)} ${minor}` : '') + '.';
			}
		} else if (credit === 0) {
			message = 'Your balance is zero.';
		} else {
			message = `Your account balance is ` +
				(majorUnit > 0 ? `${numberToWords(majorUnit)} ${major}` : '') +
				(minorUnit > 0 ? (majorUnit > 0 ? ' and ' : '') + `${numberToWords(minorUnit)} ${minor}` : '') + '.';
		}

		await ctx.tts(message);
		await ctx.tts(message); // Repeat for clarity
		return ctx.waitForHangup();

	} catch (error) {
		console.error('Error fetching customer credit:', error);
		await ctx.tts('An error occurred while checking your balance.');
	}
}
