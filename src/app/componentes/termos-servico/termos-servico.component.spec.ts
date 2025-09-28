import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosServicoComponent } from './termos-servico.component';

describe('TermosServicoComponent', () => {
  let component: TermosServicoComponent;
  let fixture: ComponentFixture<TermosServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermosServicoComponent]
    });
    fixture = TestBed.createComponent(TermosServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
