import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.scss']
})
export class TabOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

     /** AREA CHART **/
      //@ts-ignore
     var ctx = document.getElementById('chartArea').getContext('2d');

     var gradient = ctx.createLinearGradient(0, 240, 0, 0);
     gradient.addColorStop(0, 'rgba(0,123,255,0)');
     gradient.addColorStop(1, 'rgba(0,123,255,.3)');

     new Chart(ctx, {
       type: 'line',
       data: {
         labels: ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10'],
         datasets: [{
           data: [12, 15, 18, 40, 35, 38, 32, 20, 25],
           borderColor: '#007bff',
           borderWidth: 1,
           backgroundColor: gradient
         }]
       },
       options: {
         maintainAspectRatio: false,
        plugins:{
          legend:{
            display:false
          }
        },
         scales: {
           y: {
             display: false,
             beginAtZero:true,
             max:80,
             ticks: {
             font:{
               size:12,
             }
             }
           },
           x: {
            beginAtZero:true,
             ticks: {
               font:{
                 size:11,
                 family:'Arial'
               }


             }
           }
         }
       }
     });


  }

}
