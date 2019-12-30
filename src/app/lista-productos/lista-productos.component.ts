import { Productos } from './../../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listaProductos: Productos;

  constructor() {
    this.listaProductos = [
      {
        id: 1,
        nombre: 'Telefono',
        descripcion: 'Primera version'
      },
      {
        id: 2,
        nombre: 'Telefono X',
        descripcion: 'Version de telefono X'
      }
    ];
   }

  ngOnInit() {
  }

}
