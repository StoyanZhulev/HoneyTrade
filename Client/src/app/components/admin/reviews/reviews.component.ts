import { Component, OnInit } from '@angular/core';
import { Review } from '../../../models/view-models/review.model';
import { ReviewsService } from '../../../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  private reviews: Review[];
  
  constructor(
    private reviewsService: ReviewsService
  ) { }

  ngOnInit() {
    this.reviewsService.reviewsRecieved$.subscribe(data => {
      console.log(data)
      this.reviews = data;
    })
  }

}
