import { Routes } from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from "./users/users.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { OrdersComponent } from "./orders/orders.component";

export const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'users', component:  UsersComponent},
      { path: 'notifications', component: NotificationsComponent },
      { path: 'orders', component: OrdersComponent },
    ]
  },
]
