import { Component, OnInit } from '@angular/core';
import { AdminOrdersService } from '../../../services/admin/admin-orders/admin-orders.service';
import { Order } from '../../../models/view-models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders: Order[];

  constructor(
    private adminOrdersService: AdminOrdersService,
    private router: Router,
  ) { 
   
  }

  ngOnInit() {
    this.adminOrdersService.ordersRecieved$.subscribe(data => {
      console.log(data);
      this.orders = data;
    })
  }

}
