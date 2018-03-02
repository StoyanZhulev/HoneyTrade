import { Component, OnInit } from '@angular/core';
import { PartnershipRequest } from '../../../models/view-models/partnership-request.model';
import { AdminPartneshipRequestsService } from '../../../services/admin/admin-partnership-requests/admin-partnership-requests.service';

@Component({
  selector: 'app-partnership-requests',
  templateUrl: './partnership-requests.component.html',
  styleUrls: ['./partnership-requests.component.scss']
})
export class PartnershipRequestsComponent implements OnInit {

  public requests: PartnershipRequest[];

  constructor(
    private adminPartnershipRequestsService: AdminPartneshipRequestsService
  ) { }

  ngOnInit() {
    this.adminPartnershipRequestsService.requestsRecieved$.subscribe(requests => {
      console.log(requests)
      this.requests = requests;
    })
  }

}
