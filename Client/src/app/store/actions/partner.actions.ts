import { Action } from '@ngrx/store';

export const PartnerActions = {
    GET_PARTNERS_SUCCESS: 'GET_PARTNERS_SUCCESS', 
}


export class GetPartnersSuccessAction implements Action {
    type: string = PartnerActions.GET_PARTNERS_SUCCESS
    constructor(public payload: any) {
    }
}


export type Actions =
    GetPartnersSuccessAction