import { TestBed } from '@angular/core/testing';

import { AspirationService } from './aspiration.service';

describe('EmployeeService', () => {
  let service: AspirationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspirationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
