import React, { useMemo } from 'react';

const Calendar = ({ date }) => {
  // Array of weekdays to be displayed as headers
  const weekdays = useMemo(() => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], []);

  // Function to get the number of days in a given month and year
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // Extract the month and year from the given date prop
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Get the number of days in the current month and the day of the week for the first day of the month
  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  // Initialize an array of 42 elements to represent the grid of days (6 rows x 7 columns)
  const days = new Array(42).fill(null);

  // Fill in the days array with the numbers of the days for the current month
  for (let i = 0; i < daysInMonth; i++) {
    days[i + firstDayOfMonth] = i + 1;
  }

  // Get the current date to check if a day is today
  const today = new Date();

  // Function to check if a given day is today
  const isToday = (day) => {
    return day === today.getDate() && year === today.getFullYear() && month === today.getMonth() + 1;
  };

  // Render the calendar component
  return (
    <div className="calendar">
      {/* Display the month and year */}
      <div className="month-year">{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
      {/* Display the weekdays */}
      <div className="weekdays">
        {weekdays.map((weekday) => (
          <div key={weekday} className="weekday">
            {weekday}
          </div>
        ))}
      </div>
      {/* Display the days of the month */}
      <div className="days">
        {days.map((day, index) => (
          <div key={index} className={`day ${day === null ? 'empty' : ''} ${isToday(index) ? 'today' : ''}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
