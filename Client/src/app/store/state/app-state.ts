import { CompanyInfo } from "../../models/view-models/company-info.model";
import { Product } from "../../models/view-models/product.model";
import { Partner } from "../../models/view-models/users/partner.model";
import { Testimonial } from "../../models/view-models/testimonial.model";
import { Honey } from "../../models/view-models/honey.model";
import { ProductState, InitialProductState } from "./product-state";
import { PartnersState, InitialPartnerState } from "./partner-state";
import { HoneyState, InitialHoneyState } from "./honey-state";
import { TestimonialState, InitialTestimonialState } from "./testimonial-state";
import { CompanyInfoState, InitialCompanyInfoState } from "./company-info-state";


export interface AppState {
   companyInfo: CompanyInfoState,
   products: ProductState;
   partners: PartnersState
   testimonials: TestimonialState;
   honeys: HoneyState;
}

export const InitialApptate: AppState = {
    companyInfo: InitialCompanyInfoState,
    products: InitialProductState,
    partners: InitialPartnerState,
    testimonials: InitialTestimonialState,
    honeys: InitialHoneyState
}