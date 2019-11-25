export interface Measurement {
    parameter: string;
    value: number;
    lastUpdated: Date;
    unit: string;
    sourceName: string;
    averagingPeriod?: AveragingPeriod;
}

export interface AveragingPeriod {
    value: number;
    unit: string;
}