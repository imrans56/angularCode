import { TestBed } from '@angular/core/testing';

import { WelcomeServicesService } from './welcome-services.service';

describe('WelcomeServicesService', () => {
  let service: WelcomeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
