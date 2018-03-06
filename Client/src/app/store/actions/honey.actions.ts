import { Action } from '@ngrx/store';

export const HoneyActions = {
    GET_HEONEYS_SUCCESS: 'GET_HEONEYS_SUCCESS',
}


export class GetHoneySuccessAction implements Action {
    type: string = HoneyActions.GET_HEONEYS_SUCCESS
    constructor(public payload: any) {
    }
}


export type Actions =
    GetHoneySuccessAction