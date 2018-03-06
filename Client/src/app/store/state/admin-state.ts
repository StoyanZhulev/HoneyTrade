import { Subscription } from "../../models/view-models/subscription.model";
import { Order } from "../../models/view-models/order.model";
import { PartnershipRequest } from "../../models/view-models/partnership-request.model";



export interface AdminState {
    allUsers: Array<any>;
    allSubscriptions: Subscription[];
    allOrders: Order[];
    partnershipRequests: PartnershipRequest[];
}

export const InitialAdminState: AdminState = {
    allUsers: [],
    allSubscriptions: new Array<Subscription>(),
    allOrders: new Array<Order>(),
    partnershipRequests: new Array<PartnershipRequest>()
}