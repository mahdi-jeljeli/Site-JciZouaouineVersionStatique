import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSommeNousForAcceuilComponent } from './qui-somme-nous-for-acceuil.component';

describe('QuiSommeNousForAcceuilComponent', () => {
  let component: QuiSommeNousForAcceuilComponent;
  let fixture: ComponentFixture<QuiSommeNousForAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiSommeNousForAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiSommeNousForAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
