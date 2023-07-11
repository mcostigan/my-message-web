import {TestBed} from '@angular/core/testing';

import {AuthenticatedUser} from './authenticated-user.service';

describe('AuthenticatedUserService', () => {
  let service: AuthenticatedUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatedUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
