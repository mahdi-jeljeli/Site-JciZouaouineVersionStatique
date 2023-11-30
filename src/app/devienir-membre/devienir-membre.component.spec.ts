import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevienirMembreComponent } from './devienir-membre.component';

describe('DevienirMembreComponent', () => {
  let component: DevienirMembreComponent;
  let fixture: ComponentFixture<DevienirMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevienirMembreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevienirMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
