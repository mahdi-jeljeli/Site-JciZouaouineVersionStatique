import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbomPhotosComponent } from './albom-photos.component';

describe('AlbomPhotosComponent', () => {
  let component: AlbomPhotosComponent;
  let fixture: ComponentFixture<AlbomPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbomPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbomPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
