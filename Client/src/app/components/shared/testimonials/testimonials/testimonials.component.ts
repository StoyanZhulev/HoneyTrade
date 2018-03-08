import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../store/state/app-state';
import { Store } from '@ngrx/store';
import { Testimonial } from '../../../../models/view-models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  private testimonials: Testimonial[];
  private slides: number
  public slidesarr: any = [];

  constructor(
    private store: Store<AppState>
  ) { 
    this.store.select('testimonials').subscribe(data => {
      this.testimonials = data.testimonials;
      this.slides = Math.ceil(this.testimonials.length / 3);
      let index = 0;
      for(let i = 0; i < this.slides; i++){
        this.slidesarr[i] = [this.testimonials[index], this.testimonials[index + 1], this.testimonials[index + 2]];
        index += 3
      }

      console.log(this.slidesarr)
    })
  }

  ngOnInit() {
  }

}
