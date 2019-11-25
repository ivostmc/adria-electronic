import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../Models/room';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(response => {
      this.rooms =  response;
    })
  }

}
