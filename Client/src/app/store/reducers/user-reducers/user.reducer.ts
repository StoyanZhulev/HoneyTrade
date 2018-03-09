
import * as userActions from '../../actions/user.actions'
import { UserState, InitialUserState } from "../../state/user-state";
import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export function userReducer(state: UserState = InitialUserState, action: userActions.Actions): UserState {
    switch (action.type) {
        case userActions.UserActions.GET_USER_SUCCESS:
            return { ...state, userInfo: action.payload }
        case userActions.UserActions.GET_USER_MESSAGES_SUCCESS:
            return { ...state, messages: action.payload }
        case userActions.UserActions.GET_USER_NOTIFICATIONS_SUCCESS:
            return { ...state, notifications: action.payload }
        case userActions.UserActions.GET_USER_SUBSCRIPTIONS_SUCCESS:
            return { ...state, subscriptions: action.payload }
        case userActions.UserActions.GET_USER_SUBSCRIPTIONS_FAIL:
            return state;
        case userActions.UserActions.RESET_USER:
            return { ...InitialUserState }
        default:
            return state;
    }
}


export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserNotifications = createSelector(selectUserState, state => state.notifications);
export const selectUserMessages = createSelector(selectUserState, state => state.messages);
