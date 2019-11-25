import { AveragingPeriod } from './averaging-period';

export interface Measurement {
    parameter: string;
    value: number;
    lastUpdated: Date;
    unit: string;
    sourceName: string;
    averagingPeriod: AveragingPeriod;
}