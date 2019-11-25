import { Setting } from './setting';
import { Property } from './property';

export interface Room {
    id: number;
    name: string;
    address: number;
    object: string;
    subObject: string;
    zone: string;
    subZone: string;
    ipAddress: string;
    ipPort: number;
    settings: Setting[];
    properties: Property[];
    LocalCommandHeatingCooling: boolean;
    LocalCommandPanelBlocked: boolean;
}