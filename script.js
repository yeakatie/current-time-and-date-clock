/************
Static Data
************/
const allTheMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const allTheDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

/************
Dynamic Data
************/
// define `theClockApp` stored in function to be ran
const theClockApp = () => {
  // Get and store current date and time with `new Date()` object
  const now = new Date();
  // Check-Check: See all `Date()` methods and properties
  console.log(now);

  // Get current hours
  let gotHours = now.getHours();
  // Get current minutes
  let gotMinutes = now.getMinutes();
  // Get current seconds
  let gotSeconds = now.getSeconds();
  // Get current month
  const gotMonth = now.getMonth();
  // Get current day of the month
  let gotDayOfMonth = now.getDate();
  // Get current year
  const gotYear = now.getFullYear();
  // Get current day of the week
  const gotDayOfWeek = now.getDay();

  // Check-Check: Is the data correct?
  console.log(
    gotHours,
    gotMinutes,
    gotSeconds,
    gotMonth,
    gotDayOfMonth,
    gotYear,
    gotDayOfWeek
  );

  /************
Format Data
************/
  // Get AM or PM
  const gotAmOrPM = gotHours >= 12 ? "PM" : "AM";
  // Get 12 hour format
  gotHours = gotHours % 12 || 12;
  // Optionally, append zero to single digit hours
  gotHours = gotHours < 10 ? `0${gotHours}` : gotHours;
  // Optionally, append zero to single digit minutes
  gotMinutes = gotMinutes < 10 ? `0${gotMinutes}` : gotMinutes;
  // Optionally, append zero to single digit seconds
  gotSeconds = gotSeconds < 10 ? `0${gotSeconds}` : gotSeconds;
  // Optionally, append zero to single digit days of the month
  gotDayOfMonth = gotDayOfMonth < 10 ? `0${gotDayOfMonth}` : gotDayOfMonth;

  /************
Get DOM Elements
************/
  // Get Hours
  const hours = document.querySelector(".hours");
  // Get minutes
  const minutes = document.querySelector(".minutes");
  // Get seconds
  const seconds = document.querySelector(".seconds");
  // Get AM or PM
  const amOrPM = document.querySelector(".amOrPM");
  // Get the month
  const month = document.querySelector(".month");
  // Get day of the month
  const dayOfMonth = document.querySelector(".dayOfMonth");
  // Get year
  const year = document.querySelector(".year");
  // Get Day of Week
  const dayOfWeek = document.querySelector(".dayOfWeek");

  /************
Set DOM Elements
************/
  // Set the hours
  hours.innerText = gotHours;
  // Set the minutes
  minutes.innerText = gotMinutes;
  // Set the seconds
  seconds.innerText = gotSeconds;
  // Set AM or PM
  amOrPM.innerText = gotAmOrPM;
  // Set the month
  month.innerText = allTheMonths[gotMonth];
  // Set day of the month
  dayOfMonth.innerText = gotDayOfMonth;
  // Set the year
  year.innerText = gotYear;
  // Set the day of the week
  dayOfWeek.innerText = allTheDays[gotDayOfWeek];
};

/************
Run App
************/
// Re-run `theClockApp` every 1 second (1000 ms)
setInterval(theClockApp, 1000);