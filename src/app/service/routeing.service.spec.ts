import { TestBed } from '@angular/core/testing';

import { RouteingService } from './routeing.service';

describe('RouteingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteingService = TestBed.get(RouteingService);
    expect(service).toBeTruthy();
  });
});
