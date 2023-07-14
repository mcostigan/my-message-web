import {TestBed} from '@angular/core/testing';

import {PrintNeatlyService} from './print-neatly.service';

describe('PrintNeatlyService', () => {
  let service: PrintNeatlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintNeatlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should neatly print lines`, ()=>{
    let text = "the quick brown fox jumps over the lazy dog"
    let lines = service.printNeatly(text, 20)
    expect(lines.length).toBe(3)
  })
});
