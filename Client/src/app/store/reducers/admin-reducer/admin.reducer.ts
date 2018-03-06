import { AppState, InitialApptate } from "../../state/app-state";
import * as subscriptionActions from '../../actions/subscription.actions'
import { AdminState, InitialAdminState } from "../../state/admin-state";
import { createFeatureSelector } from "@ngrx/store";

export function adminReducer(state: AdminState = InitialAdminState, action: subscriptionActions.Actions): AdminState {
    switch (action.type) {
        case subscriptionActions.SubscriptionActions.GET_SUBSCRIPTIONS_SUCCESS:
            return { ...state, allSubscriptions: action.payload }
            case subscriptionActions.SubscriptionActions.RESET_ADMIN:
            return { ...InitialAdminState }
        default:
            return state;
    }
}

export const getAdminState = createFeatureSelector<AdminState>('admin');
