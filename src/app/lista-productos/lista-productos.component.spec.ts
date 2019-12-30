import { Productos } from './../../model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosComponent } from './lista-productos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ListaProductosComponent', () => {
  let component: ListaProductosComponent;
  let fixture: ComponentFixture<ListaProductosComponent>;

  const productosMock: Productos = [
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProductosComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia existir un H2 que contenga el texto "Productos"', () => {
    const h2Titulo = fixture.debugElement.query(By.css('h2'));
    const h2TituloElement = h2Titulo.nativeElement;
    expect(h2TituloElement.textContent).toBe('Productos');
  });

  it('deberia existir una propiedad llamada "listaProductos"', () => {
    component.listaProductos = productosMock;
    expect(component.listaProductos).toBeTruthy();
  });

  it('deberian existir tantos componentes "Producto" como la variable "listaProductos"' , () => {
    const productoComponent = fixture.debugElement.queryAll(By.css('app-producto'));
    expect(productoComponent.length).toBe(component.listaProductos.length);
  });
});
