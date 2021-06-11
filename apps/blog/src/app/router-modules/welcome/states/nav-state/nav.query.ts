import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NavStore, NavState } from './nav.store';

@Injectable({ providedIn: 'root' })
export class NavQuery extends QueryEntity<NavState> {

  constructor(protected store: NavStore) {
    super(store);
  }

}
