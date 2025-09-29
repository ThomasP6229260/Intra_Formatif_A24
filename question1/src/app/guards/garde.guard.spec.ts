import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { gardeGuard } from './garde.guard';

describe('gardeGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
