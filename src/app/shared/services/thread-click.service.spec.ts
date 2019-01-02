import { TestBed } from '@angular/core/testing';

import { ThreadClickService } from './thread-click.service';

describe('ThreadClickServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreadClickService = TestBed.get(ThreadClickService);
    expect(service).toBeTruthy();
  });
});
