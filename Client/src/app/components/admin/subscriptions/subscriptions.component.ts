import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../models/view-models/subscription.model';
import { AdminSubscriptionService } from '../../../services/admin/admin-subsciptions/admin-subscriptions.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public subscriptions: Subscription[];

  constructor(
    private adminSubscriptionsService: AdminSubscriptionService
  ) { }

  ngOnInit() {
    this.adminSubscriptionsService.subscriptionsRecieved$.subscribe(data => {
      this.subscriptions = data;
    })
  }

}
