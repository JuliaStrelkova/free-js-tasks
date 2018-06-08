const dateNewYear = (day, month, year) => {
    let monthYear = {
        'января': '1', 'февраля': '2', 'марта': '3', 'апреля': '4',
        'мая': '5', 'июня': '6', 'июля': '7', 'августа': '8',
        'сентября': '9', 'октября': '10', 'ноября': '11', 'декабря': '12'
    };

    let amountDays = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 === 0 || (year % 4 === 0 && year %100 !== 0)) {
        amountDays[2] = 29;
    }
    month = monthYear[month];
    amountDays[month] = amountDays[month] - day;
    amountDays = amountDays.slice(month);

    return amountDays.reduce(function (sum, current) {
        return sum + current;
    }, 0);
};
const res = dateNewYear(process.argv[2], process.argv[3], process.argv[4]).toString();
process.stdout.write(res);
