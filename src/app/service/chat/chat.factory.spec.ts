import {TestBed} from '@angular/core/testing';

import {ChatFactory} from './chat.factory';

describe('ChatFactoryService', () => {
  let service: ChatFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
