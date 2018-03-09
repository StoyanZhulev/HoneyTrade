import { createSelector, ActionReducerMap } from "@ngrx/store"

import { companyInfoReducer } from './company-info.reducer';
import { honeyReducer } from './honey.reducer';
import { partnerReducer } from './partner.reducer';
import { productReducer } from './product.reducer';
import { testimonialReducer } from './testimonial.reducer';
import { AppState } from "../../state/app-state";


export const rootReducers = {
    companyInfo: companyInfoReducer,
    honeys: honeyReducer,
    partners: partnerReducer,
    products: productReducer,
    testimonials: testimonialReducer
  }


  export const selectCompanyInfo = (state: AppState )=> state.companyInfo;

  export const selectHoneys = (state: AppState) => state.honeys.honeys;

  export const selectPartners = (state: AppState) => state.partners.partners;

  export const selectProducts = (state: AppState) => state.products.products;

  export const selectTestimonials = (state: AppState) => state.testimonials.testimonials;
  