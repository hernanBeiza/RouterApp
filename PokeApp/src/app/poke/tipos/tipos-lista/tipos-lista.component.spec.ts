import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposListaComponent } from './tipos-lista.component';

describe('TiposListaComponent', () => {
  let component: TiposListaComponent;
  let fixture: ComponentFixture<TiposListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
