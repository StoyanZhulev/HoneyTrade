import { AppState, InitialApptate } from "../../state/app-state";
import * as subscriptionActions from '../../actions/subscription.actions'
import * as orderActions from '../../actions/order.actions'
import { UserActions } from '../../actions/user.actions'
import { PartnershipRequestActions } from '../../actions/partnership-request.actions';

import { AdminState, InitialAdminState } from "../../state/admin-state";
import { createFeatureSelector } from "@ngrx/store";
import { createSelector } from "@ngrx/store";

export function adminReducer(state: AdminState = InitialAdminState, action: subscriptionActions.Actions): AdminState {
    switch (action.type) {
        case subscriptionActions.SubscriptionActions.GET_SUBSCRIPTIONS_SUCCESS:
            return { ...state, allSubscriptions: action.payload };
        case orderActions.OrderActions.GET_ALL_ORDERS_SUCCESS: 
            return { ...state, allOrders: action.payload }
        case UserActions.GET_ALL_USERS_SUCCESS:
            return { ...state, allUsers: action.payload }
        case PartnershipRequestActions.GET_ALL_PARTNERSHIP_REQUESTS_SUCCESS:
            return { ...state, partnershipRequests: action.payload }
        case subscriptionActions.SubscriptionActions.RESET_ADMIN:
            return { ...InitialAdminState }
        default:
            return state;
    }
}

export const selectAdminState = createFeatureSelector<AdminState>('admin');
export const selectAllUsers = createSelector(selectAdminState, state => state.allUsers);
export const selectAllOrders = createSelector(selectAdminState, state => state.allOrders);
export const selectAllSubscriptions = createSelector(selectAdminState, state => state.allSubscriptions);
export const selectPartnershipRequests = createSelector(selectAdminState, state => state.partnershipRequests);
