import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../store/state/app-state';
import { Store } from '@ngrx/store';
import { selectAllOrders } from '../../../../store/reducers/admin-reducer/admin.reducer';
import { AdminOrdersService } from '../../../../services/admin/admin-orders/admin-orders.service';
import { Order } from '../../../../models/view-models/order.model';

@Component({
  selector: 'app-orders-chart',
  templateUrl: './orders-chart.component.html',
  styleUrls: ['./orders-chart.component.scss']
})
export class OrdersChartComponent implements OnInit {
public showChart = false;

  public chartType:string = 'line';
        
  public chartDatasets:Array<any> = [];

  public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      },
      {
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions:any = { 
      responsive: true
  };

  public chartClicked(e: any): void { 
       
  } 
  
  public chartHovered(e: any): void { 
       
  }

  constructor(
      private store: Store<AppState>,
      private adminOrdersService: AdminOrdersService
  ) { 
    this.adminOrdersService.getOrdersByYear(2017).subscribe(data => {
      let chartData = {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Last year'}
       for(let o of data.orders){
           let date = new Date(o.date);
           
           chartData.data[date.getMonth()]++;
       }
       console.log(data.orders)
       
       this.chartDatasets.push(chartData)
       if(this.chartDatasets.length == 2){
           this.showChart = true;
       }
    })

    this.adminOrdersService.getOrdersByYear(2018).subscribe(data => {
        let chartData = {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'This year'}
        for(let o of data.orders){
            let date = new Date(o.date);
            
            chartData.data[date.getMonth()]++;
        }
        this.chartDatasets.push(chartData)
        console.log(data.orders)
       if(this.chartDatasets.length == 2){
           this.showChart = true;
           console.log(this.chartDatasets)
       }
    })
  }

  ngOnInit() {
  }

}
