import { WelcomeUIQuery } from './welcome-ui.query';
import { WelcomeUIStore } from './welcome-ui.store';

describe('WelcomeUIQuery', () => {
  let query: WelcomeUIQuery;

  beforeEach(() => {
    query = new WelcomeUIQuery(new WelcomeUIStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
