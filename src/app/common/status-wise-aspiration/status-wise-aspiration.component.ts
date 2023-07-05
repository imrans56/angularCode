import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-status-wise-aspiration',
  templateUrl: './status-wise-aspiration.component.html',
  styleUrls: ['./status-wise-aspiration.component.css']
})
export class StatusWiseAspirationComponent {
  ngOnInit(): void {
    this.RenderChart();
  }
  data= {
    
    "rmsApproved": false,
    "count":0
    
  }

  RenderChart(){
    const ctx = document.getElementById('myChart');

  new Chart("piechart", {
    type: 'pie',
    data: {
      labels: ['Accepted' , 'Rejected'],
      datasets: [{
        label: 'No. of Aspirations',
        data:[1,3],
        borderWidth: 0.5,
      }]
    }
  });
  }
}
