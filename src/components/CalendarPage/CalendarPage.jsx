import React from 'react';
import './CalendarPage.css';
import DatePicker from 'components/DatePicker/DatePicker';


const CalendarPage = () => {
  return <div className="CalendarPage">
      <h1 className="CalendarPage__title">Calendar</h1>
      <div className="CalendarPage__DateCalc">
        <DatePicker />
      </div>
    </div>;
}

export default CalendarPage;