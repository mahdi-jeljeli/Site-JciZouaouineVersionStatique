import { TestBed } from '@angular/core/testing';

import { ActionServicesService } from './action-services.service';

describe('ActionServicesService', () => {
  let service: ActionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
