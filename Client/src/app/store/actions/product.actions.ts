import { Action } from '@ngrx/store';

export const ProductActions = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAIL: 'GET_PRODUCTS_FAIL',

    CREATE_PRODUCT: 'CREATE_PRODUCT',
    CREATE_PRODUCT_SUCCESS: 'CREATE_PRODUCT_SUCCESS',
    CREATE_PRODUCT_FAIL: 'CREATE_PRODUCT_FAIL'
}


export class GetProductsAction implements Action {
    type: string = ProductActions.GET_PRODUCTS
    constructor(public payload?: any) {
    }
}


export class GetProductsSuccessAction implements Action {
    type: string = ProductActions.GET_PRODUCTS_SUCCESS
    constructor(public payload: any) {
    }
}

export class GetProductsFailAction implements Action {
    type: string = ProductActions.GET_PRODUCTS_FAIL
    constructor(public payload: any) {
    }
}

export class CreateProductAction implements Action {
    type: string = ProductActions.CREATE_PRODUCT
    constructor(public payload: any) {
    }
}

export class CreateProductSuccessAction implements Action {
    type: string = ProductActions.CREATE_PRODUCT_SUCCESS
    constructor(public payload: any) {
    }
}

export class CreateProductFailAction implements Action {
    type: string = ProductActions.CREATE_PRODUCT_FAIL
    constructor(public payload: any) {
    }
}

export type Actions =
    GetProductsAction |
    GetProductsSuccessAction | 
    GetProductsFailAction |
    CreateProductAction |
    CreateProductSuccessAction | 
    CreateProductFailAction