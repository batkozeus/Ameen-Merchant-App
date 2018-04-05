import React, { Component } from 'react';
import './CalendarPage.css';
import DatePicker from 'components/DatePicker/DatePicker';


class CalendarPage extends Component {
  
  render() {
    // const { items, text } = this.props;
    
    return <div className="CalendarPage">
        <h1 className="CalendarPage__title">Calendar</h1>
        <div className="CalendarPage__DateCalc">
          {/* <input type="date" className="dateStart" /> */}
          <DatePicker />
        </div>

        {/* <DatePicker/> */}
      </div>;
  }
}

export default CalendarPage;