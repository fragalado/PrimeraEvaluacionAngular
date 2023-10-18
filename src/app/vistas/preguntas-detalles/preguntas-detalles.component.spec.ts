import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasDetallesComponent } from './preguntas-detalles.component';

describe('PreguntasDetallesComponent', () => {
  let component: PreguntasDetallesComponent;
  let fixture: ComponentFixture<PreguntasDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntasDetallesComponent]
    });
    fixture = TestBed.createComponent(PreguntasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
