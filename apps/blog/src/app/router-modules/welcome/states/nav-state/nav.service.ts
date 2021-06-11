import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { NavStore, NavState } from './nav.store';
import navItems from '../../../../../assets/data/nav.json';
import { Nav } from './nav.model';

@Injectable({ providedIn: 'root' })
export class NavService extends NgEntityService<NavState> {

  constructor(protected store: NavStore) {
    super(store);
  }

  getNavItems() {
    const items = navItems as Nav[];
    this.store.add(items);
  }

}
