import { Component, OnInit, Input } from '@angular/core';
import { Partner } from '../../../../models/view-models/users/partner.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app-state';

@Component({
  selector: 'app-top-partners',
  templateUrl: './top-partners.component.html',
  styleUrls: ['./top-partners.component.scss']
})
export class TopPartnersComponent implements OnInit {

  public topPartners: Partner[];
  public partner1;
  public partner2;
  public partner3;

  constructor(
    private store: Store<AppState>
  ) { 
    this.store.select('partners').subscribe(data => {
      this.topPartners = data.partners.sort((a, b) => b.orders.length - a.orders.length).slice(0, 2);
      [this.partner1, this.partner2, this.partner3] = [...this.topPartners]
      
    })
  }

  ngOnInit() {
  }

}
