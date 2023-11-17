import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOSACTIONSComponent } from './nos-actions.component';

describe('NOSACTIONSComponent', () => {
  let component: NOSACTIONSComponent;
  let fixture: ComponentFixture<NOSACTIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NOSACTIONSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NOSACTIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
