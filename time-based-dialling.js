// 8am-9pm Monday - Friday
// 8am-7pm Saturday
// Blocked Sunday 

function main(data) {
	var dayOfWeek = new Date().getDay();
	var hour = new Date().getHours();
	var err = [480, 'Disallowed by Date/Time Restriction'];
//	dayOfWeek = 0;

	// Sunday - Disallowed
 	if (dayOfWeek === 0) return Promise.reject(err);
	
	// Saturday
	if (dayOfWeek === 6 && hour < 8 && hour >= 19) return Promise.reject(err);

	// Weekdays
	if (hour < 8 && hour >= 21) return Promise.reject(err);
	
	return data;
}
