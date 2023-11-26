import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationForAcceuilComponent } from './foundation-for-acceuil.component';

describe('FoundationForAcceuilComponent', () => {
  let component: FoundationForAcceuilComponent;
  let fixture: ComponentFixture<FoundationForAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationForAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundationForAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
