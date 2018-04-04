import React, { Component } from 'react';
import './CalendarPage.css';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class CalendarPage extends Component {
  
  render() {
    // const { items, text } = this.props;
    
    return (
			<div className="CalendarPage">
        <h1 className="CalendarPage__title">Calendar</h1>
      </div>
    )
  }
}

export default CalendarPage;
