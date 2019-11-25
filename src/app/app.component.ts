import { Component, OnInit } from '@angular/core';
import { RoomService } from '../app/room.service';
import { AirQualityService } from '../app/air-quality.service'
import { HolidayService } from '../app/holiday.service'
import { Measurement } from './air-quality-measurement';
import { Room } from './Models/room';
import { Holiday } from './Models/holiday';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adria-electronic';

  airQuality: Measurement[];
  rooms: Room[];
  today: Date = new Date();
  currentYear = this.today.getFullYear().toString();
  nextHolyDay: Holiday;

  constructor(private roomService: RoomService,
    private airQualityService: AirQualityService,
    private HolidayService: HolidayService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(response => {
      this.rooms = response;
    });
    this.HolidayService.getNextHolyday(this.currentYear).subscribe(holidays => {
      this.nextHolyDay = holidays.filter(holyday => this.today <= new Date(holyday.date.iso))
        .sort((a, b) => new Date(a.date.iso) > new Date(b.date.iso) ? 1 : -1)[0];
    });
    this.airQualityService.getAirQuality("Primorsko-goranska").subscribe(latestValues => {
      this.airQuality = latestValues;
    });
  }

}




