// @flow
import { handleActions } from "redux-actions";
import Actions from "actions/calendar";
import Calendar from "models/Calendar";

const defaultState: Calendar = new Calendar();

export default handleActions(
  {
    [Actions.prevMonth]: (state: Calendar) => state.prevMonth(),
    [Actions.nextMonth]: (state: Calendar) => state.nextMonth()
  },
  defaultState
);
