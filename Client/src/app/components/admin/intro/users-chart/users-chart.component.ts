import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../store/state/app-state';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../../../store/reducers/admin-reducer/admin.reducer';
import { selectPartners } from '../../../../store/reducers/root-reducers/index';

@Component({
  selector: 'app-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent implements OnInit {
 
  public chartType:string = 'pie';
        
  public chartData:Array<any> = [];

  public chartLabels:Array<any> = ['Partners', 'Buyers', 'Beekeepers', 'Users' ];

  public chartColors:Array<any> = [{
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
      hoverBorderWidth: 0, 
      backgroundColor: [ "#007E33", "#0099CC", "#FF8800", "#4D5360"], 
      hoverBackgroundColor: [ "#00C851", "#33b5e5", "#ffbb33","#616774"]
  }];

  public chartOptions:any = { 
      responsive: true
  };

  public chartClicked(e: any): void { 
       
  } 

  public chartHovered(e: any): void { 
       
  }
  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(selectAllUsers).subscribe(data => {
      this.chartData = [...this.chartData, data.buyers.length,  data.beekeepers.length, data.users.length]
    });

    this.store.select(selectPartners).subscribe(data => {
      console.log(data)
      this.chartData = [data.length]
    });
   }

  ngOnInit() {
  }

}
