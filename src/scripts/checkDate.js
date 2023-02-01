function checkDate(date) {
  return date <= new Date().getTime() ? true : false;
}

function getTime() {
  return new Date().getTime();
}

export { getTime, checkDate };
