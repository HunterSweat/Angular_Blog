import { TestBed } from '@angular/core/testing';

import { DiscriptionUiService } from './discription-ui.service';

describe('DiscriptionUiService', () => {
  let service: DiscriptionUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscriptionUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
