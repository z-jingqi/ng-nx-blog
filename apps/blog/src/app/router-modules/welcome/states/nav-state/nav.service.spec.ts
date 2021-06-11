import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NavService } from './nav.service';
import { NavStore } from './nav.store';

describe('NavService', () => {
  let navService: NavService;
  let navStore: NavStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavService, NavStore],
      imports: [ HttpClientTestingModule ]
    });

    navService = TestBed.inject(NavService);
    navStore = TestBed.inject(NavStore);
  });

  it('should be created', () => {
    expect(navService).toBeDefined();
  });

});
