// @flow
import { handleActions } from "redux-actions";
import Actions from "actions/calendar";
import Calendar from "models/Calendar";

const defaultState = new Calendar();

export default handleActions(
  {
    [Actions.prevMonth]: state => state.prevMonth(),
    [Actions.nextMonth]: state => state.nextMonth()
  },
  defaultState
);
