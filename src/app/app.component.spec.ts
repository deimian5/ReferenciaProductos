import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'miTienda'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('miTienda');
  });

  it('deberia existir un div con clase "toolbar"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const div = fixture.debugElement.query(By.css('div[class="toolbar"]'));
    expect(div).toBeTruthy();
  });

  it('deberia existir una etiqueta img', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const logo = fixture.debugElement.query(By.css('img'));
    expect(logo).toBeTruthy();
  });

  it('deberia existir una etiqueta span que contenga el texto "Mi tienda"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const span = fixture.debugElement.query(By.css('span'));
    const spanElement = span.nativeElement;
    expect(span).toBeTruthy();
    expect(spanElement.textContent).toBe('Mi tienda');
  });

  it('deberia existir un boton con nombre "btnRevisar"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btnRevisar = fixture.debugElement.query(By.css('button[name="btnRevisar"]'));
    expect(btnRevisar).toBeTruthy();
  });

  it('deberia existir una etiqueta llamada "app-lista-productos"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appListaProductos = fixture.debugElement.query(By.css('app-lista-productos'));
    expect(appListaProductos).toBeTruthy();
  });
});
