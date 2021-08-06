import Operation, { OperationType, CultureType, Assessment } from './Operation';
import TDate from './TDate';
import locale from '@/locales/intterra-ru-RU.json';

export const Months = [
  'ЯНВ',
  'ФЕВ',
  'МАР',
  'АПР',
  'МАЙ',
  'ИЮН',
  'ИЮЛ',
  'АВГ',
  'СЕН',
  'ОКТ',
  'НОЯ',
  'ДЕК',
];

export function dateToNumber(date?: TDate): number {
  let d = date;
  if (!d) {
    const current = new Date();
    d = new TDate({
      day: current.getDate(),
      month: current.getMonth(),
      year: current.getFullYear(),
    });
  }
  return d.year * 10000 + d.month * 100 + d.day;
}

export function formatDate(date: TDate): string {
  return `${date.day} ${Months[date.month]} ${date.year}`;
}

export enum OperationProps {
  ID = "id",
  OPERATION = "operation",
  CULTURE = "culture",
  DATE = "date",
  QUALITY = "quality",
  AREA = "area",
  COMMENT = "comment",
}

export default class OperationItem {
  [OperationProps.ID]: string | null;
  [OperationProps.OPERATION]: { value: string, id: OperationType };
  [OperationProps.CULTURE]: { value: string, id: CultureType };
  [OperationProps.DATE]: { value: string, timestamp: number };
  [OperationProps.QUALITY]: { value: string, id: Assessment };
  [OperationProps.AREA]: { value: string };
  [OperationProps.COMMENT]: { value: string };
  constructor(op: Operation) { 
    this[OperationProps.ID] = op.id || null;
    this[OperationProps.OPERATION] = {
      value: locale[OperationType[op.type]],
      id: op.type,
    };
    this[OperationProps.CULTURE] = {
      value: locale[CultureType[op.culture]],
      id: op.culture,
    };
    this[OperationProps.DATE] = {
      value: formatDate(op.date),
      timestamp: dateToNumber(op.date),
    };
    if (op.assessment !== null && op.assessment !== undefined) {
      this[OperationProps.QUALITY] = {
        value: locale[Assessment[op.assessment]],
        id: op.assessment,
      };
    } else {
      this[OperationProps.QUALITY] = {
        value: locale[Assessment[Assessment.NONE]],
        id: Assessment.NONE,
      };
    }
  }
}
