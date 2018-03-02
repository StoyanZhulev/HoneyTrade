import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminUserService } from '../../../services/admin/admin-users/admin-users.service';
import { Beekeeper } from '../../../models/view-models/users/beekeeper.model';
import { Subscription } from '../../../models/view-models/subscription.model';

@Component({
  selector: 'app-beekeeper-details',
  templateUrl: './beekeeper-details.component.html',
  styleUrls: ['./beekeeper-details.component.scss']
})
export class BeekeeperDetailsComponent implements OnInit {

  public user: Beekeeper;
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
    await this.adminUsersService.getBeekeeper(email).subscribe(userData => {
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
