import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredoSectionComponent } from './credo-section.component';

describe('CredoSectionComponent', () => {
  let component: CredoSectionComponent;
  let fixture: ComponentFixture<CredoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
