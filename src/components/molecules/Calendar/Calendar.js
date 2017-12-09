// @flow
import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import Button from "components/atoms/Button";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${42 * 6}px;
`;

const WeekCell = styled.div`
  display: flex;
  &:first-child {
    justify-content: flex-end;
  }
`;

const DateCell = styled.div`
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  margin: 4px;
`;

type Props = {
  year: number,
  month: number,
  prevMonth: Function,
  nextMonth: Function
};

class Calendar extends Component<Props> {
  static defaultProps = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1
  };

  render() {
    const { year, month, prevMonth, nextMonth, ...other } = this.props;
    const startDay = new Date(year, month - 1, 1).getDay();
    const endDate = new Date(year, month, 0).getDate();
    const firstSunday = 7 - startDay + 1;
    const weekCount = Math.ceil((endDate + startDay) / 7);
    const weekStart = i => Math.max(1, firstSunday + (i - 1) * 7);
    const weekEnd = i => Math.min(firstSunday + i * 7, endDate + 1);
    const calendar = _.range(weekCount).map(i => ({
      id: `${year}-${month}:${i}`,
      week: _.range(weekStart(i), weekEnd(i))
    }));
    return (
      <Root {...other}>
        <Header>
          <Button onClick={prevMonth}>&lt;</Button>
          {String(year)}年{String(month)}月
          <Button onClick={nextMonth}>&gt;</Button>
        </Header>
        <Content>
          {calendar.map(({ id, week }) => (
            <WeekCell key={id}>
              {week.map(date => <DateCell key={date}>{date}</DateCell>)}
            </WeekCell>
          ))}
        </Content>
      </Root>
    );
  }
}

export default Calendar;
