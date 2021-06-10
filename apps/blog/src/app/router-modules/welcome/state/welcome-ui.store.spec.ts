import { WelcomeUIStore } from './welcome-ui.store';

describe('WelcomeUIStore', () => {
  let store: WelcomeUIStore;

  beforeEach(() => {
    store = new WelcomeUIStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
