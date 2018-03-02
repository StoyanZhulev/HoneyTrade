import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminUserService } from '../../../services/admin/admin-users/admin-users.service';
import { Buyer } from '../../../models/view-models/users/buyer.model';
import { Subscription } from '../../../models/view-models/subscription.model';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.scss']
})
export class BuyerDetailsComponent implements OnInit {

  public user: Buyer;
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
    await this.adminUsersService.getBuyer(email).subscribe(userData => {
      console.log('asdasdfaghsjdklasjhasfjddjk,s')
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
