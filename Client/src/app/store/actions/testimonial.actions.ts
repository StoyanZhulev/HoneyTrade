import { Action } from '@ngrx/store';

export const TestimonialActions = {
    GET_TESTIMONIALS_SUCCESS: 'GET_TESTIMONIALS_SUCCESS', 
}


export class GetTestimonialSuccessAction implements Action {
    type: string = TestimonialActions.GET_TESTIMONIALS_SUCCESS
    constructor(public payload: any) {
    }
}


export type Actions =
    GetTestimonialSuccessAction