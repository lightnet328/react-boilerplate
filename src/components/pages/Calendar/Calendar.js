// @flow
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import type { Connector } from "react-redux";
import styled from "styled-components";
import Calendar from "components/molecules/Calendar";
import Actions from "actions/calendar";
import type { State, Dispatch } from "types";

const Root = styled.div``;

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

const connector: Connector<{}, Props> = connect(
  (state: State) => ({
    year: state.calendar.getYear(),
    month: state.calendar.getMonth()
  }),
  (dispatch: Dispatch) => bindActionCreators(Actions, dispatch)
);

export default connector(CalendarPage);
