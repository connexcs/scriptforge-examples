/*
Example code to be set in customer or in route

[schedule]
week = "9-21"
offset = -4

This will allow the customer to dial on Weekdays between 9am and 9pm weekdays only.
*/


function main (data) {
	if (!data.schedule) return data;

	var offset = data.schedule.offset || 0
	
	var date = new Date(new Date().getTime() + offset * 3600 * 1000);
	var dayOfWeek = date.getDay();
	var hour = date.getHours();

	var isWeekDay = !(dayOfWeek == 6 || dayOfWeek == 0)
	
	var scheduleText = isWeekDay ? data.schedule.week : data.schedule.weekend

	if (!scheduleText) throw new Error('480 Disallowed by Date/Time Restriction')
	
	var [startHour, endHour] = scheduleText.split('-')
	if (!(startHour >= 0 && startHour < 24))  throw new Error('503 Date/Time Restriction Syntax Error');
	if (!(endHour >= 0 && endHour < 24))  throw new Error('503 Date/Time Restriction Syntax Error');
	
	if (hour < startHour)  throw new Error('480 Disallowed by Date/Time Restriction')
	if (hour > endHour)  throw new Error('480 Disallowed by Date/Time Restriction')
	
	return data;
}

