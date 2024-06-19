import { TestBed } from '@angular/core/testing';

import { HelloworldDataLayerService } from './helloworld-data-layer.service';

describe('HelloworldDataLayerService', () => {
  let service: HelloworldDataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloworldDataLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
