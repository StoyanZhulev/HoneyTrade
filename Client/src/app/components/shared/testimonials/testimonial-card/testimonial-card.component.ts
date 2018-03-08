import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from '../../../../models/view-models/testimonial.model';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  @Input('testimonial') testimonial:Testimonial

  constructor() { }

  ngOnInit() {
  }

}
