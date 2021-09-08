import { TestBed } from '@angular/core/testing';

import { CommonUserServiceService } from './common-user-service.service';

describe('CommonUserServiceService', () => {
  let service: CommonUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
