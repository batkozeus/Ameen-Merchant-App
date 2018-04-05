import React, { Component } from "react";
import "./DatePicker.css";
import DatePicker from "react-datepicker";
import Moment from "moment";
import "react-datepicker/dist/react-datepicker.css";


class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: Moment(),
      endDate: Moment(),
      dateInterval: '0'
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  countDays() {
    var ms = Moment(this.state.endDate).diff(Moment(this.state.startDate));
    var d = Moment.duration(ms);
    var s = Math.floor(d.asDays());
    console.log(s);
    this.setState({
      dateInterval: s
    });
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
    setTimeout(() => {
      this.countDays();
    }, 100);
    
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
    setTimeout(() => {
      this.countDays();
    }, 100);
  }

  render() {
    return <div className="DateCollection">
        <div className="DateForm">
          Departure
          <DatePicker className="DateInput" selected={this.state.startDate} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart} monthsShown={2} />
        </div>

        <div className="DateForm DateForm--white">
          Arriving
          <DatePicker className="DateInput" selected={this.state.endDate} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} monthsShown={2} />
        </div>

        <div className="DateResultForm">
          Days
          <div className="DateResultInfo">{this.state.dateInterval}</div>
        </div>
      </div>;
  }
}

export default MyDatePicker;