import { TestBed } from '@angular/core/testing';

import { RmCommentsService } from './rm-comments.service';

describe('RmCommentsService', () => {
  let service: RmCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
