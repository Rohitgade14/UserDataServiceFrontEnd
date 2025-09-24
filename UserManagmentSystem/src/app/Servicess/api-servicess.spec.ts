import { TestBed } from '@angular/core/testing';

import { ApiServicess } from './api-servicess';

describe('ApiServicess', () => {
  let service: ApiServicess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
