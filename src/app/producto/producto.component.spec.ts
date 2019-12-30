import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponent } from './producto.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Producto } from '../../model';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;
  const productoMock: Producto = {
    id: 1,
    nombre: 'Telefono',
    descripcion: 'Primera version del telefono'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    component.producto = productoMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia existir una etiqueta "H3"', () => {
    const h3 = fixture.debugElement.query(By.css('H3'));
    expect(h3).toBeTruthy();
  });

  it('deberia existir una propiedad llamada "producto"', () => {
    expect(component.producto).toBeTruthy();
  });

  it('deberia existir una etiqueta "a" la cual contenga el texto de la propiedad "producto.nombre"', () => {
    const a = fixture.debugElement.query(By.css('a'));
    const aElement = a.nativeElement;
    expect(aElement.textContent.trim()).toBe(component.producto.nombre);
  });

  it('deberia existir una etiqueta "p" en la cual debe estar la descripcion del producto', () => {
    const pDescripcion = fixture.debugElement.query(By.css('p'));
    const pDescripcionElement = pDescripcion.nativeElement;
    expect(pDescripcionElement.textContent.trim()).toBe(component.producto.descripcion);
  });

  it('no debe pintar el "p" si la descripcion es vacia', () => {
    component.producto.descripcion = '';
    fixture.detectChanges();
    const p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeFalsy();
  });

  it('deberia existir un boton llamado "btnCompartir"', () =>{
    const btnCompartir = fixture.debugElement.query(By.css('button[name="btnCompartir"]'));
    expect(btnCompartir).toBeTruthy();
  });

  it('deberia el boton "btnCompartir" llamar al metodo "compartir"', () => {
    const btnCompartir = fixture.debugElement.query(By.css('button[name="btnCompartir"]'));
    const btnCompartirElement = btnCompartir.nativeElement;
    spyOn(component, 'compartir');
    btnCompartirElement.click();
    expect(btnCompartir).toBeTruthy();
    expect(component.compartir).toHaveBeenCalled();
  });

  it('deberia el metodo compartir llamar una alerta', () =>{
  });

});
