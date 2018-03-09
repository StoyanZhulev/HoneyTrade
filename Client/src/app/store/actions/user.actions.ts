import { Action } from '@ngrx/store';

export const UserActions = {
    GET_USER_SUCCESS: 'GET_USER_SUCCESS', 
    RESET_USER: 'RESET_USER',
    GET_USER_MESSAGES_SUCCESS: 'GET_USER_MESSAGES_SUCCESS',
    GET_USER_NOTIFICATIONS_SUCCESS: 'GET_USER_NOTIFICATIONS_SUCCESS',
    GET_USER_SUBSCRIPTIONS_SUCCESS: 'GET_USER_SUBSCRIPTIONS_SUCCESS',
    GET_USER_SUBSCRIPTIONS_FAIL: 'GET_USER_SUBSCRIPTIONS_FAIL',
    GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS'
}

export class GetAllUsersSuccessAction implements Action {
    type: string = UserActions.GET_ALL_USERS_SUCCESS
    constructor(public payload: any) {
    }
}

export class GetUserSuccessAction implements Action {
    type: string = UserActions.GET_USER_SUCCESS
    constructor(public payload: any) {
    }
}

export class ResetUserAction implements Action {
    type: string = UserActions.RESET_USER
    constructor(public payload?: any) {
    }
}

export class GetUserMessagesSuccessAction implements Action {
    type: string = UserActions.GET_USER_MESSAGES_SUCCESS
    constructor(public payload: any) {
    }
}

export class GetUserNotificationsSuccessAction implements Action {
    type: string = UserActions.GET_USER_NOTIFICATIONS_SUCCESS
    constructor(public payload: any) {
    }
}

export class GetUserSubscriptionsSuccessAction implements Action {
    type: string = UserActions.GET_USER_SUBSCRIPTIONS_SUCCESS
    constructor(public payload: any) {
    }
}

export class GetUserSubscriptionsFailAction implements Action {
    type: string = UserActions.GET_USER_SUBSCRIPTIONS_FAIL
    constructor(public payload: any) {
    }
}

export type Actions =
    GetUserSuccessAction |
    ResetUserAction |
    GetUserNotificationsSuccessAction |
    GetUserMessagesSuccessAction | 
    GetUserSubscriptionsSuccessAction | 
    GetUserSubscriptionsFailAction