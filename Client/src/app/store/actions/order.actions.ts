import { Action } from '@ngrx/store';

export const OrderActions = {
    GET_ALL_ORDERS_SUCCESS: 'GET_ALL_ORDERS_SUCCESS',
}


export class GetGetAllOrdersSuccessAction implements Action {
    type: string = OrderActions.GET_ALL_ORDERS_SUCCESS
    constructor(public payload: any) {
    }
}


export type Actions =
    GetGetAllOrdersSuccessAction