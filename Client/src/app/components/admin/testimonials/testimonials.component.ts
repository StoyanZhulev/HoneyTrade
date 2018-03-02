import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../models/view-models/testimonial.model';
import { TestimonialsService } from '../../../services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  private testimonials: Testimonial[];
  
  constructor(
    private testimonialsService: TestimonialsService
  ) { }

  ngOnInit() {
    this.testimonialsService.testimonialsRecieved$.subscribe(data => {
      console.log(data)
      this.testimonials = data;
    })
  }

}
