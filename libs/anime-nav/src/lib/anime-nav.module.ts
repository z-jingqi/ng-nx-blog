import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeNavContainerComponent } from './anime-nav-container/anime-nav-container.component';
import { AnimeNavItemComponent } from './anime-nav-item/anime-nav-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AnimeNavContainerComponent,
    AnimeNavItemComponent
  ],
})
export class AnimeNavModule {}
