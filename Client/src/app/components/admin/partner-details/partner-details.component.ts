import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminUserService } from '../../../services/admin/admin-users/admin-users.service';
import { Partner } from '../../../models/view-models/users/partner.model';
import { Subscription } from '../../../models/view-models/subscription.model';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.scss']
})
export class PartnerDetailsComponent implements OnInit {
  public user: Partner;
  public subs: Subscription[];
  constructor(

    private route: ActivatedRoute,
    private adminUsersService: AdminUserService
  ) { }

  ngOnInit() {
    let email = this.route.snapshot.paramMap.get('email');
    this.getUser(email);
    this.getSubs(email);
   
  }

  async getUser(email) {
    await this.adminUsersService.getPartner(email).subscribe(userData => {
      console.log(userData)
      this.user = userData.userData;
    });
  }

  async getSubs(email){
   await  this.adminUsersService.getUserSubsciptions(email).subscribe(subs => {
      subs = subs.subscriptions;
      console.log(subs)
      this.subs = subs;
    })
  }

}
