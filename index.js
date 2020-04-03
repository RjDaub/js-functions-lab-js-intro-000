function happyHolidays() {
  var string;
  string = "Happy holidays!"
  return string
}

function happyHolidaysTo(name = Jessie) {
  return `Happy holidays, ${name}!`;
}

function happyCustomHolidayTo(holiday = Christmas, name = Jessie) {
  return `Happy ${holiday} Day, ${name}`;
}
