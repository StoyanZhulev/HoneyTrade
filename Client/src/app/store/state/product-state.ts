import { Product } from "../../models/view-models/product.model";



export interface ProductState {
    products: Product[]
}

export const InitialProductState: ProductState = {
   products: new Array<Product>()
}