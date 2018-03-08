import { Component, OnInit, Input } from '@angular/core';
import { Partner } from '../../../../models/view-models/users/partner.model';

@Component({
  selector: 'app-top-partner-card',
  templateUrl: './top-partner-card.component.html',
  styleUrls: ['./top-partner-card.component.scss']
})
export class TopPartnerCardComponent implements OnInit {

  @Input('partner') partner: Partner

  constructor() { }

  ngOnInit() {
  }

}
