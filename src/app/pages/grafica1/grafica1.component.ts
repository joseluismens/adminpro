import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component   {

  public datos = ['Pan', 'Refresco', 'Tacos'];
  public data1= [10, 15, 40];
  public data2= [100, 15, 400];

  public colors:string[] = ["#FF740", "#647323", "#eee"] 
}
