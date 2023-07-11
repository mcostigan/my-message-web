import {TestBed} from '@angular/core/testing';

import {TypingMembers} from './typing-members';

describe('TypingMembersService', () => {
  let service: TypingMembers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingMembers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
