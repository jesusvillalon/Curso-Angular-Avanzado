import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(): void {
   this.btnClass = `btn ${this.btnClass}`
  }

// @Input('valor') progress: number = 30; (Forma de renombrar el argumento)
 @Input() progress: number = 30;
 @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number){
    if(this.progress >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      this.progress = 100;
      return;
    }
    if(this.progress <= 0 && valor < 0){
      this.valorSalida.emit(0);
      this.progress = 0;
      return;
    }
    this.progress = this.progress + valor;
    this.valorSalida.emit(this.progress);

  }

  onChange(nuevoValor: number) {
    // Hacemos la comprobación para que nunca pase de 100 o de 0 si es al revés
    if(nuevoValor >= 100) {
      this.progress = 100;
    } else if (nuevoValor <= 0){
      this.progress = 0;
    } else {
      this.progress = nuevoValor;
    }

    this.valorSalida.emit(this.progress);
  }

}
