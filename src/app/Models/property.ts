import { ReadDetails } from './read-details';
import { WriteDetails } from './write-details';

export interface Property {
    id: number;
    type: number;
    name: string;
    description: string;
    mqttTopic: string;
    readDetails: ReadDetails;
    writeDetails: WriteDetails;
    defaultValue: string;
    preActionFunction: string;
    postActionFunction: string;
    Value: string;
}