/*
 * A function to convert milliseconds to date and time.
 *
 * @param {number} created - time in seconds
 * @returns formatted date and time
 */

export const getTimeAndDate = (created) => {
  const date = new Date(created * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the date and time as desired
  const formattedDateTime = `${day}/${month}/${year} @ ${hours}:${minutes}`;
  return formattedDateTime;
};
