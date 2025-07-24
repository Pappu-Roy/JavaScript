// Pappu Roy
// CSE SUST

// JavaScript Date Methods

const d = new Date;
console.log(d); // Current Date and Time

console.log(d.toString()); // Convert Date to String
console.log(d.toDateString()); // Convert Date to Date String
console.log(d.toTimeString()); // Convert Date to Time String

let date = new Date("2022-03-25");
console.log(date); // Specific Date
console.log(typeof date); // Check Type of Date Object
console.log(date.toString()); // Convert Specific Date to String

/* 
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds) 
*/
console.log("Date Creation Methods:");
console.log(new Date()); // Current Date and Time
console.log(new Date("2023-10-01")); // Date from String
console.log(new Date(2000, 9)); // Year and Month (0-11)
console.log(new Date(2000, 9, 10)); // Year, Month, Day
console.log(new Date(2000, 9, 10, 12)); // Year, Month, Day, Hours
console.log(new Date(2000, 9, 1, 12, 30)); // Year, Month, Day, Hours, Minutes
console.log(new Date(2000, 9, 1, 12, 30, 45)); // Year, Month, Day, Hours, Minutes, Seconds
console.log(new Date(2000, 9, 1, 12, 30, 45, 500)); // Year, Month, Day, Hours, Minutes, Seconds, Milliseconds
console.log(new Date(1696118400000)); // Date from Milliseconds

// Date Methods
date = new Date("2022-05-25T10:20:30Z");  
console.log("Date Methods:");   
console.log(date.getFullYear()); // Get Full Year
console.log(date.getMonth()); // Get Month (0-11)
console.log(date.getDate()); // Get Day of Month (1-31)
console.log(date.getDay()); // Get Day of Week (0-6)    
console.log(date.getHours()); // Get Hours (0-23)
console.log(date.getMinutes()); // Get Minutes (0-59)
console.log(date.getSeconds()); // Get Seconds (0-59)
console.log(date.getMilliseconds()); // Get Milliseconds (0-999)
console.log(date.getTime()); // Get Time in Milliseconds since Epoch
console.log(date.getUTCFullYear()); // Get UTC Full Year

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dt = new Date("2021-03-25");
let month = months[dt.getMonth()];
console.log(month); // Get Month Name from Array
console.log(dt.getUTCMonth()); // Get UTC Month (0-11)

// Date Set Methods
console.log("Date Set Methods:");
date = new Date("2022-05-25T10:20:30Z");
date.setFullYear(2023); // Set Full Year
console.log(date); // Updated Date
date.setMonth(11); // Set Month (0-11)
console.log(date); // Updated Date
date.setDate(15); // Set Day of Month (1-31)
console.log(date); // Updated Date
date.setHours(14); // Set Hours (0-23)
console.log(date); // Updated Date
date.setMinutes(45); // Set Minutes (0-59)
console.log(date); // Updated Date
date.setSeconds(30); // Set Seconds (0-59)
console.log(date); // Updated Date
date.setMilliseconds(500); // Set Milliseconds (0-999)
console.log(date); // Updated Date
date.setTime(1696118400000); // Set Time in Milliseconds since Epoch
console.log(date); // Updated Date
date.setUTCFullYear(2024); // Set UTC Full Year
console.log(date); // Updated Date