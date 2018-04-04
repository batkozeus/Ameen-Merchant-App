import React, { Component } from "react";
import "./DatePicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    console.log(this.state.startDate);
    return <div className="DateCollection">
      <div className="DateForm">
        Departure
        {/* <DatePicker className="DateInput" selected={this.state.startDate} onChange={this.handleChange} /> */}
        <DatePicker 
          className="DateInput"
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
          monthsShown={2}
        />
      </div>

      <div className="DateForm">
        Arriving
        <DatePicker 
          className="DateInput"
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
          monthsShown={2}
        />
      </div>
    </div>
  }
}

export default MyDatePicker;
