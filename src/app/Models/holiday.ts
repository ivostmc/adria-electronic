import { HolidayDate } from './holiday-date';

export interface Holiday {
    name: string;
    description: string;
    date: HolidayDate;
    type: string[];
    locations: string;
    states: string;
}