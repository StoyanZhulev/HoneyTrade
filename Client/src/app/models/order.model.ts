import { Product } from './product.model';


export class Order{
    customer: string
    product: Product
    date: Date   
    quantity: number
    price: number
    status: string
}