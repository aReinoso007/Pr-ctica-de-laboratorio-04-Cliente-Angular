import { TestBed } from '@angular/core/testing';

import { WsJeeService } from './ws-jee.service';

describe('WsJeeService', () => {
  let service: WsJeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsJeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
