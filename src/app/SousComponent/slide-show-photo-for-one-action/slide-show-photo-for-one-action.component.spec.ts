import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowPhotoForOneActionComponent } from './slide-show-photo-for-one-action.component';

describe('SlideShowPhotoForOneActionComponent', () => {
  let component: SlideShowPhotoForOneActionComponent;
  let fixture: ComponentFixture<SlideShowPhotoForOneActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideShowPhotoForOneActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideShowPhotoForOneActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
