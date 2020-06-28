import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadDetalleComponent } from './habilidad-detalle.component';

describe('HabilidadDetalleComponent', () => {
  let component: HabilidadDetalleComponent;
  let fixture: ComponentFixture<HabilidadDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
