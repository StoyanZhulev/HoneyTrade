import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CompanyInfo } from "../models/view-models/company-info.model";


@Injectable()
export class CompanyInfoService {
    private companyInfoSource = new BehaviorSubject<CompanyInfo>(undefined);
    public companyInfoRecieved$ = this.companyInfoSource.asObservable();

    constructor(
    ){};

    updateCompanyInfo(data){
        this.companyInfoSource.next(data);
    }
}