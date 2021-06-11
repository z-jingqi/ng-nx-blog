import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Nav } from './nav.model';

export interface NavState extends EntityState<Nav> {
  url?: string;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'nav' })
export class NavStore extends EntityStore<NavState> {

  constructor() {
    super();
  }

}
