import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WelcomeUIService } from './welcome-ui.service';
import { WelcomeUIStore } from './welcome-ui.store';

describe('WelcomeUIService', () => {
  let welcomeUIService: WelcomeUIService;
  let welcomeUIStore: WelcomeUIStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeUIService, WelcomeUIStore],
      imports: [ HttpClientTestingModule ]
    });

    welcomeUIService = TestBed.inject(WelcomeUIService);
    welcomeUIStore = TestBed.inject(WelcomeUIStore);
  });

  it('should be created', () => {
    expect(welcomeUIService).toBeDefined();
  });

});
