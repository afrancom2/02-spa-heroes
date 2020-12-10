import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  // puede venir inicializado desde afuera con el @input
  @Input() heroe: any = {};
  @Input() index: number;

  // Output para que le padre este escuchando
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  verHeroe() {
    //this.heroeSeleccionado.emit(this.index);
    /* console.log(this.index);*/
    this.router.navigate(['/heroe', this.index]);
  }
}
