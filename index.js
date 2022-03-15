const addDays = require("date-fns/addDays");
const date = new Date(2020, 08, 22);

module.exports = function getDateAfterXDays(days) {
  const newDate = addDays(date, days);

  let year = newDate.getFullYear();
  let month = newDate.getMonth();
  let day = newDate.getDate();

  day < 10 ? (day = "0" + day) : (day = day);
  month < 10 ? (month = "0" + month) : (month = month);

  return `${day}-${month}-${year}`;
};
