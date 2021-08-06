import TDate from './TDate';

export enum OperationType {
  PLOWING = 0,
  BOWLING = 1,
  FERTILIZATION = 2,
  WATERING = 3,
  RIGGING = 4,
  HARVESTING = 5,
}

export enum Assessment {
  EXCELLENT = 0,
  SATISFACTORILY = 1,
  BADLY = 2,
  NONE = 3,
}

export enum CultureType {
  WINTER_WHEAT = 0,
}

export default class Operation {
  id?: string | null;

  type: OperationType;

  culture: CultureType;

  date: TDate;

  area: number;

  comment?: string | null;

  assessment?: Assessment | null;

  constructor(args: Operation) {
    const {
      id = null,
      type,
      culture,
      date,
      area,
      comment = null,
      assessment = null,
    } = args;
    this.id = id;
    this.type = type;
    this.culture = culture;
    this.date = new TDate(date);
    this.area = area;
    this.comment = comment;
    this.assessment = assessment;
  }
}
