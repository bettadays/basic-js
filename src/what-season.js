module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!date instanceof Date ||date.getTime() === undefined )  throw Error; // typeof   -> object; i.constructor === Date -> true
 // one of functions that was not  in pseudo time object  for very tricky case check
  const month = date.getMonth(); // 0-11 months
  if (month > 10) return 'winter';
  if (month > 7) return 'autumn';
  if (month > 4) return 'summer';
  if (month > 1) return 'spring';
  if (month > -1) return 'winter';
};

// OR create array w,w,s etc 0-11 and return form there


