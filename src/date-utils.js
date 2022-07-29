const today = new Date();
const yesterday = new Date();
const tomorrow = new Date();
const sevenDaysFromToday = new Date();

yesterday.setDate(today.getDate() - 1);
tomorrow.setDate(today.getDate() + 1);
sevenDaysFromToday.setDate(today.getDate() + 7);

function compareDates(d1, d2) {
	if (d1.getFullYear() < d2.getFullYear()) return -1;
	else if (d1.getFullYear() > d2.getFullYear()) return 1;
	else if (d1.getMonth() < d2.getMonth()) return -1;
	else if (d1.getMonth() > d2.getMonth()) return 1;
	else if (d1.getDate() < d2.getDate()) return -1;
	else if (d1.getDate() > d2.getDate()) return 1;
	else return 0;
}

export { today, yesterday, tomorrow, sevenDaysFromToday, compareDates };
