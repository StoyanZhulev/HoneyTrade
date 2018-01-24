import { Component, OnInit } from '@angular/core';
import { Honey } from '../../../models/view-models/honey.model';
import { HoneyService } from '../../../services/honey.service';

@Component({
  selector: 'app-honeys',
  templateUrl: './honeys.component.html',
  styleUrls: ['./honeys.component.css']
})
export class HoneysComponent implements OnInit {

  public honeys: Honey[];

  constructor(
    private honeySrvice: HoneyService
  ) { }

  ngOnInit() {
    this.honeySrvice.honeysRecieved$.subscribe(honeys => {
      this.honeys = honeys;
    })
  }

}
