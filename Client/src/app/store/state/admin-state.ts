import { Subscription } from "../../models/view-models/subscription.model";
import { Order } from "../../models/view-models/order.model";
import { PartnershipRequest } from "../../models/view-models/partnership-request.model";
import { User } from "../../models/view-models/users/user.model";
import { Beekeeper } from "../../models/view-models/users/beekeeper.model";
import { Buyer } from "../../models/view-models/users/buyer.model";



export interface AdminState {
    allUsers: {
      users: User[],
      beekeepers: Beekeeper[],
      buyers: Buyer[],
      count: number  
    },
    allSubscriptions: Subscription[];
    allOrders: Order[];
    partnershipRequests: PartnershipRequest[];
}

export const InitialAdminState: AdminState = {
    allUsers: {
        users: [],
        beekeepers: [],
        buyers: [],
        count: 0
    },
    allSubscriptions: new Array<Subscription>(),
    allOrders: new Array<Order>(),
    partnershipRequests: new Array<PartnershipRequest>()
}