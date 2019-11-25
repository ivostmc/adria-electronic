import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../Models/room';
import { Holiday } from '../Models/holiday';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {

  @Input() nextHolyDay: Holiday;
  @Input() rooms: Room[]; 
  date: Date;
  sidebarRooms: any[];
  
  constructor() { }

  ngOnInit() {
    this.sidebarRooms = this.rooms;
    this.date = new Date(this.nextHolyDay.date.iso);
  }

}
