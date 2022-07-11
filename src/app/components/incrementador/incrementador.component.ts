import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }
  
  @Input()progress: number = 40;
  @Input() btnClass :string  = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter
  get getPorcentaje() {
    return `${this.progress}%`;
  }

  cambiarValor(cuanto: number) {
    this.progress += cuanto;
    if (this.progress < 0) {
      this.progress = 0;

    }
    if (this.progress > 100) {
      this.progress = 100;
    }
    this.valorSalida.emit(this.progress);

  }
  OnChange(valor:number){

    if (valor >= 100) {
      this.progress = 100;

    }else  if (this.progress <= 0) {
      this.progress = 0;
    }else{
      this.progress = valor;
    }
    this.valorSalida.emit(this.progress);
  }
}
