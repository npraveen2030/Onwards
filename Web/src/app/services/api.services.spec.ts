import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.services';  //correct import

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);     //inject the right class
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
