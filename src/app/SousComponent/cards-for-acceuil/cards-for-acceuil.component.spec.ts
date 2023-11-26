import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsForAcceuilComponent } from './cards-for-acceuil.component';

describe('CardsForAcceuilComponent', () => {
  let component: CardsForAcceuilComponent;
  let fixture: ComponentFixture<CardsForAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsForAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsForAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
