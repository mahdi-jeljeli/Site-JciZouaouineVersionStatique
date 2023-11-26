import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OURProjectforAcceuilComponent } from './ourprojectfor-acceuil.component';

describe('OURProjectforAcceuilComponent', () => {
  let component: OURProjectforAcceuilComponent;
  let fixture: ComponentFixture<OURProjectforAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OURProjectforAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OURProjectforAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
