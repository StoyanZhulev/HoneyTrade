import { Buyer } from "./buyer.model";
import { Order } from "../order.model";


export class Partner {
    companyEmail: { type: String };
    company: Buyer;
    orders: Order[];  
}