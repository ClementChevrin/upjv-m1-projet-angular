import { TestBed } from '@angular/core/testing';

import { AuthLoginGuard } from './auth-login.guard';

describe('AuthGuard', () => {
  let guard: AuthLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
