import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public map: any = { lat: 42.128933, lng: 24.759185 };

  constructor() { }

  ngOnInit() {
  }

}
