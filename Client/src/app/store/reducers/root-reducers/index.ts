import { createSelector, ActionReducerMap } from "@ngrx/store"

import { companyInfoReducer } from './company-info.reducer';
import { honeyReducer } from './honey.reducer';
import { partnerReducer } from './partner.reducer';
import { productReducer } from './product.reducer';
import { testimonialReducer } from './testimonial.reducer';


export const rootReducers = {
    companyInfo: companyInfoReducer,
    honeys: honeyReducer,
    partners: partnerReducer,
    products: productReducer,
    testimonials: testimonialReducer
  }
