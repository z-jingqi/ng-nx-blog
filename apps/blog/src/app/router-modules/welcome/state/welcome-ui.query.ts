import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WelcomeUIStore, WelcomeUIState } from './welcome-ui.store';

@Injectable({ providedIn: 'root' })
export class WelcomeUIQuery extends QueryEntity<WelcomeUIState> {

  constructor(protected store: WelcomeUIStore) {
    super(store);
    this.createUIQuery();
  }

}
