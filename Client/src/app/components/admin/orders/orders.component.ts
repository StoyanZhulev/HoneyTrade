import { Component, OnInit } from '@angular/core';
import { AdminOrdersService } from '../../../services/admin/admin-orders/admin-orders.service';
import { Order } from '../../../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Order[];
  public str: string = 'hahahahah';

  constructor(
    private adminOrdersService: AdminOrdersService,
    private router: Router,
  ) { 
    this.adminOrdersService.ordersRecieved$.subscribe(data => {
      console.log('recieving orders from orders component')
      this.orders = data;
    })
  }

  ngOnInit() {
    console.log('ASDKJASLDASDL:ADASDSAASDAS')
  }

}
