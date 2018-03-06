import { Action } from '@ngrx/store';

export const SubscriptionActions = {
    GET_SUBSCRIPTIONS_SUCCESS: 'GET_SUBSCRIPTIONS_SUCCESS',
    RESET_ADMIN: 'RESET_ADMIN'
}


export class GetSubscriptionsSuccessAction implements Action {
    type: string = SubscriptionActions.GET_SUBSCRIPTIONS_SUCCESS
    constructor(public payload: any) {
    }
}

export class ResetAdminAction implements Action {
    type: string = SubscriptionActions.RESET_ADMIN
    constructor(public payload?: any) {
    }
}


export type Actions =
    GetSubscriptionsSuccessAction |
    ResetAdminAction