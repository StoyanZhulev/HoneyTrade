import { AppState, InitialApptate } from "../../state/app-state";
import * as honeyActions from '../../actions/honey.actions'
import { HoneyState, InitialHoneyState } from "../../state/honey-state";

export function honeyReducer(state: HoneyState = InitialHoneyState, action: honeyActions.Actions): HoneyState {
    switch (action.type) {
        case honeyActions.HoneyActions.GET_HEONEYS_SUCCESS:
            return { ...state, honeys: action.payload }
        default:
            return state;
    }
}