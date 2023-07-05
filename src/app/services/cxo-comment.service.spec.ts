import { TestBed } from '@angular/core/testing';

import { CxoCommentService } from './cxo-comment.service';

describe('CxoCommentService', () => {
  let service: CxoCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CxoCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
