import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AnimeNav } from '../models/anime-nav.model';

@Component({
  selector: 'jing-qi-anime-nav-item',
  templateUrl: './anime-nav-item.component.html',
  styleUrls: ['./anime-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimeNavItemComponent {

  @Input() animeNav!: AnimeNav;

}
