import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from '../air-quality-measurement';

@Component({
  selector: 'app-air-quality-header',
  templateUrl: './air-quality-header.component.html',
  styleUrls: ['./air-quality-header.component.scss']
})
export class AirQualityHeaderComponent implements OnInit {

  @Input() measurements: Measurement[];

  constructor() { }

  ngOnInit() {
  }

}
