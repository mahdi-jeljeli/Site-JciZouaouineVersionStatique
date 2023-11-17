import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfelioComponent } from './portfelio.component';

describe('PortfelioComponent', () => {
  let component: PortfelioComponent;
  let fixture: ComponentFixture<PortfelioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfelioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfelioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
