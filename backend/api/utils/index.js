export const convertEpochToDate = dateEpoch => {
  const dateFromApi = new Date(dateEpoch);
  let month = dateFromApi.getMonth() + 1;
  let day = dateFromApi.getDate();
  let year = dateFromApi.getFullYear();
  month = (month > 9 ? "" : "0") + month;
  day = (day > 9 ? "" : "0") + day;
  return `${month}/${day}/${year}`;
};

// Store in any format, epoch or UTC date string.
// Ex: Date.now() gives epoch and
//     new Date('1993-25-02').toUTCString() gives UTC String - "Thu, 25 Feb 1993 00:00:00 GMT"

// Before sending it to client convert it to ISO string
// ex: a = 1579920392908 || "Thu, 25 Feb 1993 00:00:00 GMT"

// let b = new Date(a);
// let finalString = b.toISOString();
