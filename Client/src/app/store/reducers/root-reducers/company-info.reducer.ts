import { AppState, InitialApptate } from "../../state/app-state";
import * as companyInfoActions from '../../actions/company-info.action'
import { CompanyInfoState, InitialCompanyInfoState } from "../../state/company-info-state";

export function companyInfoReducer(state: CompanyInfoState = InitialCompanyInfoState, action: companyInfoActions.Actions): CompanyInfoState {
    switch (action.type) {
        case companyInfoActions.CompanyInfoActions.GET_COMPANY_SUCCESS:
            return { ...state, companyInfo: action.payload }
        case companyInfoActions.CompanyInfoActions.GET_COMPANY_INFO_FAIL:
            return state
        case companyInfoActions.CompanyInfoActions.UPDATE_COMPANY_INFO_SUCCESS:
            return { ...state, companyInfo: action.payload }
            case companyInfoActions.CompanyInfoActions.UPDATE_COMPANY_INFO_FAIL:
            // let errMsg = action.payload.message;
            // let newErrors = state.errors;
            // newErrors.push(errMsg);
            return state
        default:
            return state;
    }
}