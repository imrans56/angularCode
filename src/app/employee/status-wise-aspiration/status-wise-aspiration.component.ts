import { Component, OnInit } from '@angular/core';
import{Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-status-wise-aspiration',
  templateUrl: './status-wise-aspiration.component.html',
  styleUrls: ['./status-wise-aspiration.component.css']
})
export class StatusWiseAspirationComponent implements OnInit {


  
  ngOnInit(): void {
    this.RenderChart();
  }

  data= {
    "id": 2,
    "title": "",
    "description": "",
    "type": 0,
    "status": 0,
    "rmsApproved": false,
    "buApproved": false,
    "fullFillBy": "",
    "isActive": false,
    "isDeleted": false
    
  }

  RenderChart(){
    const ctx = document.getElementById('myChart');

  new Chart("piechart", {
    type: 'pie',
    data: {
      labels: ['Draft', 'Accepted', 'Not-Accepted', 'UnderReview'],
      datasets: [{
        label: 'No. of Aspirations',
        data:[this.data.id,3,3,4],
        //data: [4, 3, 3, 2],
        //data: [this.data.isActive, this.data.rmsApproved, this.data.buApproved, this.data.status],

        borderWidth: 0.5,
      }]
    },
    options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    }
  });
  }
  
}
