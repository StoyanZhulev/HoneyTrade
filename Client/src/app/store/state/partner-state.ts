import { Product } from "../../models/view-models/product.model";
import { Partner } from "../../models/view-models/users/partner.model";

export interface PartnersState {
    partners: Partner[]
}

export const InitialPartnerState: PartnersState = {
   partners: new Array<Partner>()
}