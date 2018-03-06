import { Testimonial } from "../../models/view-models/testimonial.model";

export interface TestimonialState {
    testimonials: Testimonial[]
}

export const InitialTestimonialState: TestimonialState = {
   testimonials: new Array<Testimonial>()
}