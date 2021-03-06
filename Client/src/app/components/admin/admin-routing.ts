import { Routes } from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from "./users/users.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { OrdersComponent } from "./orders/orders.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component";
import { ProductsComponent } from "./products/products.component";
import { MessagesComponent } from './messages/messages.component';
import { PartnershipRequestsComponent } from './partnership-requests/partnership-requests.component'
import { HoneysComponent } from './honeys/honeys.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BeekeeperDetailsComponent } from './beekeeper-details/beekeeper-details.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { PartnerDetailsComponent } from './partner-details/partner-details.component';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
  {  path: '', component: AdminComponent,
  children: [
    { path: 'intro', component: IntroComponent },
    { path: 'users', component:  UsersComponent},
    { path: 'notifications', component: NotificationsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'subscriptions', component: SubscriptionsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'partnership-requests', component: PartnershipRequestsComponent },
    { path: 'honeys', component: HoneysComponent },
    { path: 'company-info', component: CompanyInfoComponent },
    { path: 'user/:email/details', component: UserDetailsComponent },
    { path: 'beekeeper/:email/details', component: BeekeeperDetailsComponent },
    { path: 'buyer/:email/details', component: BuyerDetailsComponent },
    { path: 'partner/:email/details', component: PartnerDetailsComponent }
  ]
},
 
]
