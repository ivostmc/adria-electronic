import { Datetime } from './date-time';
import { Timezone } from './time-zone';

export interface HolidayDate {
    iso: any;
    datetime: Datetime;
    timezone: Timezone;
}