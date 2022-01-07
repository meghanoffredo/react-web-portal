import React, { useState, useEffect  } from 'react';

// set today's date
const today = new Date();
let day = today.getDay();
let dayToday = "";

if (day === 1) { // get day of week
    dayToday = "Monday";
} else if (day === 2) {
    dayToday = "Tuesday";
} else if (day === 3) {
    dayToday = "Wednesday";
} else if (day === 4) {
    dayToday = "Thursday";
} else if (day === 5) {
    dayToday = "Friday";
} else if (day === 6) {
    dayToday = "Saturday";
} else {
    dayToday = "Sunday";
}

let month = today.getMonth();
let todaysMonth = "";

if (month === 0) { // get month
    todaysMonth = "January";
} else if (month === 1) {
    todaysMonth = "February";
} else if (month === 2) {
    todaysMonth = "March";
} else if (month === 3) {
    todaysMonth = "April";
} else if (month === 4) {
    todaysMonth = "May";
} else if (month === 5) {
    todaysMonth = "June";
} else if (month === 6) {
    todaysMonth = "July";
} else if (month === 7) {
    todaysMonth = "August";
} else if (month === 8) {
    todaysMonth = "September";
} else if (month === 9) {
    todaysMonth = "October";
} else if (month === 10) {
    todaysMonth = "November";
} else {
    todaysMonth = "December";
}

let todaysDate = today.getDate();

if (todaysDate === 1 || todaysDate === 21 || todaysDate === 31) {
    todaysDate = todaysDate + "st";
} else if (todaysDate === 3 || todaysDate === 23) {
    todaysDate = todaysDate + "rd";
} else {
    todaysDate = todaysDate + "th";
}

// component function
function Clock(){
    const [date, setDate] = useState(new Date());
    
    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);

    return (
      <div className="time-container">
        <div className="date-today">
          Today is {dayToday}, {todaysMonth} {todaysDate}
        </div>
        <div className="timezone-container">
          <div className="localTime">
            <p className="localTimeHoursMinutes">{date.toLocaleTimeString("en-US", {timeZone: "Asia/Dubai", hour: '2-digit', minute: '2-digit'})}</p>
            <p className="city">Dubai</p>
          </div>
          <div className="localTime">
            <p className="localTimeHoursMinutes">{date.toLocaleTimeString("en-US", {timeZone: "Europe/Paris", hour: '2-digit', minute: '2-digit'})}</p>
            <p className="city">Paris</p>
          </div>
          <div className="localTime">
            <p className="localTimeHoursMinutes">{date.toLocaleTimeString("en-US", {timeZone: "America/New_York", hour: '2-digit', minute: '2-digit'})}</p>
            <p className="city">New York</p>
          </div>
          <div className="localTime">
            <p className="localTimeHoursMinutes">{date.toLocaleTimeString("en-US", {timeZone: "Asia/Singapore", hour: '2-digit', minute: '2-digit'})}</p>
            <p className="city"> Singapore</p>
          </div>
        </div>
      </div>
    );
  }
  export default Clock;