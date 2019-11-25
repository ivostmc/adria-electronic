import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../Models/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {

  selectedRoom: Room;
  tempRoomSetValue: string;
  tempRoomCurrent: string;
  dnd: boolean;
  occupied: boolean;
  showSettings: boolean = false;
  showSettingsLabel: string = "Show settings";
  generateQRcode: boolean = false;
  generateQRcodeLabel: string = "Generate QR code";
  qrUrl: string;

  constructor(private route: ActivatedRoute,
    private roomService: RoomService) {
      route.params.subscribe(val => {
        this.selectedRoom = null;
        this.showSettings = false;
        this.showSettingsLabel = "Show settings";
        this.generateQRcode = false;
        this.generateQRcodeLabel = "Generate QR code"
        this.getRoom(+val.id);
      });
     }

  ngOnInit() {}

  getRoom(id): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.selectedRoom = rooms.filter(room => room.id === id)[0];
      this.dnd = false;
      this.occupied = false;
      this.selectedRoom.properties.forEach(property => {
        if(property.id === 11){
          if(!sessionStorage.getItem(this.selectedRoom.id.toString())){
            this.tempRoomSetValue = property.Value;
          } else {
            this.tempRoomSetValue = sessionStorage.getItem(this.selectedRoom.id.toString());
          }
        }
        if(property.id === 12){
          this.tempRoomCurrent = property.Value;
        }
        if(property.id === 27 && property.Value === "1"){
          this.dnd = true;
        }
        if(property.id === 48 && property.Value === "1"){
          this.occupied = true;
        }
      })
    });
  }
  updateTemperature(){
    sessionStorage.setItem(this.selectedRoom.id.toString(), this.tempRoomSetValue);
  }
  showQR(generateQR){
    this.qrUrl = null;
    if(generateQR){
      const QR = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
      this.qrUrl = QR + this.selectedRoom.name;
    }
  }
  

}
