import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJciForAcceuilComponent } from './why-jci-for-acceuil.component';

describe('WhyJciForAcceuilComponent', () => {
  let component: WhyJciForAcceuilComponent;
  let fixture: ComponentFixture<WhyJciForAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyJciForAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyJciForAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
