import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/view-models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.productsRecieved$.subscribe(prods => {
      console.log(prods)
      this.products = prods;
    })
  }

}
