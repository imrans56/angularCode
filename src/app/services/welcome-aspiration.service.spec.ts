import { TestBed } from '@angular/core/testing';

import { WelcomeAspirationService } from './welcome-aspiration.service';

describe('WelcomeAspirationService', () => {
  let service: WelcomeAspirationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeAspirationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
