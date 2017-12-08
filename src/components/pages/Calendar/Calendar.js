// @flow
import React, { Component } from "react";
import type { ComponentType } from "react";
import { bindActionCreators } from "redux";
import type { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Calendar from "components/molecules/Calendar";
import Actions from "actions/calendar";

const Root: ComponentType<{}> = styled.div``;

type Props = {
  year: number,
  month: number,
  nextMonth: Function,
  prevMonth: Function
};

class CalendarPage extends Component<Props> {
  render() {
    const { year, month, prevMonth, nextMonth, ...ohter } = this.props;
    const calendarProps = {
      year,
      month,
      prevMonth,
      nextMonth
    };
    return (
      <Root {...ohter}>
        <Calendar {...calendarProps} />
      </Root>
    );
  }
}

export default connect(
  (state: Object) => ({
    year: state.calendar.getYear(),
    month: state.calendar.getMonth()
  }),
  (dispatch: Dispatch<any>) => bindActionCreators(Actions, dispatch)
)(CalendarPage);
