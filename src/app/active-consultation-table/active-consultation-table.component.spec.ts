import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveConsultationTableComponent } from './active-consultation-table.component';

describe('ActiveConsultationTableComponent', () => {
  let component: ActiveConsultationTableComponent;
  let fixture: ComponentFixture<ActiveConsultationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveConsultationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveConsultationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
