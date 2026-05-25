/**
 * DATES — revision
 * HTML: ../html/basics.html
 *
 * new Date() — current moment
 * .toDateString() — weekday, month, day, year
 * .toTimeString() — time + timezone
 */

const myDate = new Date();
console.log("Date object:", myDate);
console.log("toDateString():", myDate.toDateString());
console.log("toTimeString():", myDate.toTimeString());
