// @flow
import { Record } from "immutable";

class Calendar extends Record({ date: new Date() })<{ date: Date }> {
  date: Date;

  getYear(): number {
    return this.date.getFullYear();
  }

  getMonth(): number {
    return this.date.getMonth() + 1;
  }

  prevMonth(): Calendar {
    const [year, month] = [this.getYear(), this.getMonth() - 1];
    return this.set("date", new Date(year, month - 1));
  }

  nextMonth(): Calendar {
    const [year, month] = [this.getYear(), this.getMonth() - 1];
    return this.set("date", new Date(year, month + 1));
  }
}

export default Calendar;
