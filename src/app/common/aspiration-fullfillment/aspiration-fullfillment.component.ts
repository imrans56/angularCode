import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { Chart } from 'chart.js';
import { DashboardService } from 'src/app/services/dashboard.service';
import { StatusWiseAspirationComponent } from '../status-wise-aspiration/status-wise-aspiration.component';

@Component({
  selector: 'app-aspiration-fullfillment',
  templateUrl: './aspiration-fullfillment.component.html',
  styleUrls: ['./aspiration-fullfillment.component.css']
})
export class AspirationFullfillmentComponent {


  ngOnInit() {
      
       this.getAspirationTypeCounts();
      this.getAspirationStatus();
      this.getAspirationFullfillment();
     
  }

  dataSource:MatTableDataSource<any>= new MatTableDataSource();

  displayedColumns: string[] = ['a', 'b', 'c']

  data = {
    "Year": "",
    "Month": "",
    "Count": 0
  }

  constructor(private dialog: MatDialog, private http: HttpClient,
    private authService: MsalService, private dashboardService: DashboardService) {

  }

  aspData:any=[];
 // To Get Aspiration FullFillment in Month & Count
  getAspirationFullfillment() {
   
    this.dashboardService.getAll().subscribe((response:any) => {
      console.log("Count Response",response);
      this.aspData=response;
      console.log("AspData:",this.aspData);
      this.dataSource = new MatTableDataSource(this.aspData);
    }, (error) => {
      console.log(error);
    });
}


addAspirationFullfillment(){
  this.dialog.open(StatusWiseAspirationComponent,{ disableClose: true});
  this.dialog.afterAllClosed.subscribe((open: any) => {

    this.getAspirationFullfillment();
  });
}


// to get Status of the aspiration in Pie Chart
getAspirationStatus(){
  this.dashboardService.getStatus().subscribe((response:any) =>{
    console.log('response:', response);
    const buApproved:any= response.map((t:any)=> t.BUApproved);
    const buCount:any=response.map((t:any)=> t.Count);
    this.renderAspirationStatus(buApproved,buCount);
  })
    }
  renderAspirationStatus(buApproved:Array<any>, buCount: Array<any>) {
    new Chart("statusPiechart", {
      type: 'pie',
      data: {
        labels: buApproved,
        datasets: [{
          label: 'Approved',
          data: buCount,
          borderWidth: 0.5,
        }]
      }
    });
  }

  
  // To get Count of Aspiration Types Working fine
  getAspirationTypeCounts() {
    this.dashboardService.getType().subscribe((response:any) => {
      console.log('response:', response);
      const types = response.map((r: any) => r.Type);
      const counts = response.map((r: any) => r.Count);
      this.RenderAspirationTypeChart(types, counts);
    })
  }

  RenderAspirationTypeChart(types: Array<any>, counts:Array<any>) {
    const ctx = document.getElementById('myChart');

    new Chart("typepiechart", {
      type: 'pie',
      data: {
        labels: types,
        datasets: [{
          label: 'Aspirations',
          data: counts,
          borderWidth: 0.5,
        }]
      }
    });
  }


}

