import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagesseComponent } from './sagesse.component';

describe('SagesseComponent', () => {
  let component: SagesseComponent;
  let fixture: ComponentFixture<SagesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagesseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SagesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
