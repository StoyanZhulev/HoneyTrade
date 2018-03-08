import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app-state';
import { Partner } from '../../../models/view-models/users/partner.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // public partners: Partner[];
  // public topPartners: Partner[];

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
      // this.store.select('partners').subscribe(data => {
      //   this.partners = data.partners.sort((a, b) => b.orders.length - a.orders.length);
      //   this.topPartners = this.partners.slice(0, 2);
      //   console.log(this.topPartners)
      //   console.log(this.partners)
        
      // })
   }

  ngOnInit() {
  }

}
