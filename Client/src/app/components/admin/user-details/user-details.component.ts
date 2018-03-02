import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminUserService } from '../../../services/admin/admin-users/admin-users.service';
import { Subscription } from '../../../models/view-models/subscription.model';
import { User } from '../../../models/view-models/users/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public subs: Subscription[];
  public user: User;
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
    await this.adminUsersService.getUser(email).subscribe(userData => {
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
