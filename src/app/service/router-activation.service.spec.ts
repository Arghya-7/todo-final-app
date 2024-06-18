import { TestBed } from '@angular/core/testing';

import { RouterActivationService } from './router-activation.service';

describe('RouterActivationService', () => {
  let service: RouterActivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterActivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
