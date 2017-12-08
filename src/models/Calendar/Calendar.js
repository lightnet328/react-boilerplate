// @flow
import { Record } from "immutable";

class Calendar extends Record({
  date: new Date()
}) {
  getYear() {
    return this.date.getFullYear();
  }

  getMonth() {
    return this.date.getMonth() + 1;
  }

  prevMonth() {
    const [year, month] = [this.getYear(), this.getMonth() - 1];
    return this.set("date", new Date(year, month - 1));
  }

  nextMonth() {
    const [year, month] = [this.getYear(), this.getMonth() - 1];
    return this.set("date", new Date(year, month + 1));
  }
}

export default Calendar;
