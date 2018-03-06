import * as partnerActions from '../../actions/partner.actions'
import { PartnersState, InitialPartnerState } from "../../state/partner-state";

export function partnerReducer(state: PartnersState = InitialPartnerState, action: partnerActions.Actions): PartnersState {
    switch (action.type) {
        case partnerActions.PartnerActions.GET_PARTNERS_SUCCESS:
            return { ...state, partners: action.payload }
        default:
            return state;
    }
}