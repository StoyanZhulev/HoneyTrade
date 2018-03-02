import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Testimonial } from "../models/view-models/testimonial.model";


@Injectable()
export class TestimonialsService {
    private testimonialsSource = new BehaviorSubject<Testimonial[]>([]);
    public testimonialsRecieved$ = this.testimonialsSource.asObservable();

    constructor(
    ){};

    updateTestimonials(data){
        this.testimonialsSource.next(data);
    }
}