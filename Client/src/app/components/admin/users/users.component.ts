import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { MessageService } from '../../../services/message.service';
import { Router } from '@angular/router';
import { AdminUserService } from '../../../services/admin/admin-users/admin-users.service';
import { User } from '../../../models/view-models/users/user.model';
import { Beekeeper } from '../../../models/view-models/users/beekeeper.model';
import { Buyer } from '../../../models/view-models/users/buyer.model';
import { Partner } from '../../../models/view-models/users/partner.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[];
  public beekeepers: Beekeeper[];
  public buyers: Buyer[];
  public partners: Partner[];

  constructor(
    private adminUsersService: AdminUserService,

  ) {

  }

  ngOnInit() {
    this.adminUsersService.usersRecieved$.subscribe(users => {
      this.users = users;
    })

    this.adminUsersService.beekeepersRecieved$.subscribe(beekeepers => {
      this.beekeepers = beekeepers;
    })

    this.adminUsersService.buyersRecieved$.subscribe(buyers => {
      this.buyers = buyers;
    })

    this.adminUsersService.partnersRecieved$.subscribe(partners => {
      this.partners = partners;
    })
  }

}
