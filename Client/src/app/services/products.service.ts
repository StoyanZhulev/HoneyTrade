import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Product } from "../models/view-models/product.model";


@Injectable()
export class ProductsService {
    private productsSource = new BehaviorSubject<Product[]>([]);
    public productsRecieved$ = this.productsSource.asObservable();

    constructor(
    ){};

    updateProducts(data){
        this.productsSource.next(data);
    }
}