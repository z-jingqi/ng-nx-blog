import { NavStore } from './nav.store';

describe('NavStore', () => {
  let store: NavStore;

  beforeEach(() => {
    store = new NavStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});
