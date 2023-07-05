import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { Chart } from 'chart.js';
import { WelcomeAspirationService } from 'src/app/services/welcome-aspiration.service';
import { TypeWiseAspirationComponent } from 'src/app/common/type-wise-aspiration/type-wise-aspiration.component';

@Component({
  selector: 'app-aspiration-details',
  templateUrl: './aspiration-details.component.html',
  styleUrls: ['./aspiration-details.component.css']
})
export class AspirationDetailsComponent {
  
  dataSource:any;

  displayedColumns:string[]=['a','b','c','d','e','f']

  data= {
    "id":0,
    "title": "",
    "description": "",
    "type": "",
    "status": "",
    "CreatedDate": 0
    
  }

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private aspirationService: WelcomeAspirationService) {

  }

  ngOnInit() {
    this.getAll();
    this.getStatus();
   
  }

  getAll() {
      this.aspirationService.getAll().subscribe((response:any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data);
      }, (error) => {
        console.log(error);
      });
}

  getStatus() {
    this.aspirationService.getWelcome().subscribe((response:any) => {
      console.log('response:', response);
      const status = response.map((r: any) => r.Status);
      const title = response.map((r: any) => r.Title);
       this.RenderTypeChart(status,title);
    })
  }

 
 // statusdata = JSON.stringify(status)
  RenderTypeChart(status:Array<string> , title :Array<any>) {
   // const ctx = document.getElementById('myChart');
   console.log('Status',status);
    new Chart("piechart", {
      type: 'pie',
      data: {
        labels: title,
        datasets: [{
          
          label: 'Aspirations',
        // data:status+"",
          data:[29,22,2,1,3],
          borderWidth: 0.5,
        }]
      }
    });
  }


  add(){
    this.dialog.open(TypeWiseAspirationComponent,{ disableClose: true});
    // this.dialog.afterAllClosed.subscribe((open: any) => {
    // });
  }
}


