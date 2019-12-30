import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto;

  constructor() { }

  ngOnInit() {
  }
  compartir() {
    alert('El producto ha sido compartido');
  }
}
