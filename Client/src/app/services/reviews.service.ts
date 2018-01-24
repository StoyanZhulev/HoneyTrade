import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Review } from "../models/view-models/review.model";


@Injectable()
export class ReviewsService {
    private reviewsSource = new BehaviorSubject<Review[]>([]);
    public reviewsRecieved$ = this.reviewsSource.asObservable();

    constructor(
    ){};

    updateReviews(data){
        this.reviewsSource.next(data);
    }
}