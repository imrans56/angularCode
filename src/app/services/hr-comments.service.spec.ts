import { TestBed } from '@angular/core/testing';

import { HrCommentsService } from './hr-comments.service';

describe('HrCommentsService', () => {
  let service: HrCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
