import { TestBed } from '@angular/core/testing';

import { BuheadCommentServiceService } from './buhead-comment-service.service';

describe('BuheadCommentServiceService', () => {
  let service: BuheadCommentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuheadCommentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
