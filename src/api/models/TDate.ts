export default class TDate {
  year: number;

  month: number;

  day: number;

  constructor(args: TDate) {
    const { year, month, day } = args;
    this.year = year;
    this.month = month;
    this.day = day;
  }
}
