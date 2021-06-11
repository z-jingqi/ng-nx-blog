import { NavQuery } from './nav.query';
import { NavStore } from './nav.store';

describe('NavQuery', () => {
  let query: NavQuery;

  beforeEach(() => {
    query = new NavQuery(new NavStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});
