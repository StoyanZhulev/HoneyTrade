import { Action } from '@ngrx/store';

export const CompanyInfoActions = {
    GET_COMPANY_INFO: 'GET_COMPANY_INFO',
    GET_COMPANY_SUCCESS: 'GET_COMPANY_INFO_SUCCESS',
    GET_COMPANY_INFO_FAIL: 'GET_COMPANY_INFO_FAIL',    
    UPDATE_COMPANY_INFO: 'UPDATE_COMPANY_INFO',
    UPDATE_COMPANY_INFO_SUCCESS: 'UPDATE_COMPANY_INFO_SUCCESS',
    UPDATE_COMPANY_INFO_FAIL: 'UPDATE_COMPANY_INFO_FAIL'
    
}


export class GetCompanyInfoAction implements Action {
    type: string = CompanyInfoActions.GET_COMPANY_INFO
    constructor(public payload?: any) {
    }
}
export class GetCompanyInfoSuccessAction implements Action {
    type: string = CompanyInfoActions.GET_COMPANY_SUCCESS
    constructor(public payload: any) {
    }
}
export class GetCompanyInfoFailAction implements Action {
    type: string = CompanyInfoActions.GET_COMPANY_INFO_FAIL
    constructor(public payload: any) {
    }
}


export class UpdateCompanyInfoAction implements Action {
    type: string = CompanyInfoActions.UPDATE_COMPANY_INFO
    constructor(public payload: any) {
    }
}

export class UpdateCompanyInfoSuccessAction implements Action {
    type: string = CompanyInfoActions.UPDATE_COMPANY_INFO_SUCCESS
    constructor(public payload: any) {
    }
}

export class UpdateCompanyInfoFailAction implements Action {
    type: string = CompanyInfoActions.UPDATE_COMPANY_INFO_FAIL
    constructor(public payload: any) {
    }
}


export type Actions =
    GetCompanyInfoAction |
    GetCompanyInfoSuccessAction | 
    GetCompanyInfoFailAction |
    UpdateCompanyInfoAction |
    UpdateCompanyInfoSuccessAction | 
    UpdateCompanyInfoSuccessAction