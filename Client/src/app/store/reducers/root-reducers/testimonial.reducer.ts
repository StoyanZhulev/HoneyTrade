import { AppState, InitialApptate } from "../../state/app-state";
import * as testimonialActions from '../../actions/testimonial.actions'
import { TestimonialState, InitialTestimonialState } from "../../state/testimonial-state";

export function testimonialReducer(state: TestimonialState = InitialTestimonialState, action: testimonialActions.Actions): TestimonialState {
    switch (action.type) {
        case testimonialActions.TestimonialActions.GET_TESTIMONIALS_SUCCESS:
            return { ...state, testimonials: action.payload }
        default:
            return state;
    }
}