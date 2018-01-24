import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../../../models/view-models/company-info.model';
import { CompanyInfoService } from '../../../services/company-info.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  public info: CompanyInfo;

  constructor(
    private companyInfoService: CompanyInfoService
  ) { }

  ngOnInit() {
    this.companyInfoService.companyInfoRecieved$.subscribe(info => {
      console.log(info)
      this.info = info;
    })
  }

}
