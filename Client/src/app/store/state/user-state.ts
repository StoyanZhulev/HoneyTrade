import { Beekeeper } from "../../models/view-models/users/beekeeper.model";
import { Buyer } from "../../models/view-models/users/buyer.model";
import { User } from "../../models/view-models/users/user.model";
import { Partner } from "../../models/view-models/users/partner.model";
import { Message } from "../../models/view-models/message.model";
import { Notification } from "../../models/view-models/notification.model";
import { Subscription } from "../../models/view-models/subscription.model";
import { Order } from "../../models/view-models/order.model";
import { AppState } from "./app-state";


export interface UserState{
    userInfo: Beekeeper | Buyer | User | Partner;
    messages: Message[];
    notifications: Notification[];
    subscriptions: Subscription[];
    orders?: Order[]
}

export const InitialUserState: UserState = {
    userInfo: new User(),
    messages: new Array<Message>(),
    notifications: new Array<Notification>(),
    subscriptions: new Array<Subscription>()
}

