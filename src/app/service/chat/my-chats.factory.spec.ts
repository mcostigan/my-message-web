import {TestBed} from '@angular/core/testing';

import {MyChatsFactory} from './my-chats.factory';

describe('MyChatsFactoryService', () => {
  let service: MyChatsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyChatsFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
