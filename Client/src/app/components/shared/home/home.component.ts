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
   }

  ngOnInit() {
  }

}
