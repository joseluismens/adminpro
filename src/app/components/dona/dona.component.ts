import { Component,Input ,OnInit , OnChanges} from '@angular/core';
import { ChartData, ChartEvent, ChartType ,Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnChanges   {

  @Input() title: string = 'Sin titulo';
  @Input('colors') colors: string [] = [ '#6857E6','#009FEE','#F02059' ] 
  @Input('labels') doughnutChartLabels:string[] =['label1','label2','label3'];
  @Input('data') data: number[]=[ 350, 450, 100 ];

 
    public doughnutChartData: ChartData<'doughnut'> = {
      labels:this.doughnutChartLabels,
      datasets:[
        {data: this.data,backgroundColor:this.colors}
      ],
      
    };
    public doughnutChartType: ChartType = 'doughnut';

  ngOnChanges(){
      this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [{data: this.data,backgroundColor:this.colors}],
      };
  }

  

}



