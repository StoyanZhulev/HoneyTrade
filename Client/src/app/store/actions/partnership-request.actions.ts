import { Action } from '@ngrx/store';

export const PartnershipRequestActions = {
    GET_ALL_PARTNERSHIP_REQUESTS_SUCCESS: 'GET_ALL_PARTNERSHIP_REQUESTS_SUCCESS',
}


export class GetAllPartnershipRequestsSuccessAction implements Action {
    type: string = PartnershipRequestActions.GET_ALL_PARTNERSHIP_REQUESTS_SUCCESS
    constructor(public payload: any) {
    }
}


export type Actions =
    GetAllPartnershipRequestsSuccessAction