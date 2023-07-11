import {TestBed} from '@angular/core/testing';

import {TypingFactory} from './typing.factory';

describe('TypingFactoryService', () => {
  let service: TypingFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
