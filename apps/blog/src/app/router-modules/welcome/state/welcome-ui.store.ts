import { Injectable } from '@angular/core';
import { EntityState, EntityStore, EntityUIStore, StoreConfig } from '@datorama/akita';
import { createWelcomeUI, WelcomeUI } from './welcome-ui.model';

export type WelcomeUIState = EntityState<WelcomeUI>

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'welcomeUI' })
export class WelcomeUIStore extends EntityStore<WelcomeUIState> {

  ui!: EntityUIStore<WelcomeUIState>;

  constructor() {
    super();
    this.createUIStore(createWelcomeUI({}));
  }

}
