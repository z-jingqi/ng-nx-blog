import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AnimeNav } from '../models/anime-nav.model';

@Component({
  selector: 'jing-qi-anime-nav-container',
  templateUrl: './anime-nav-container.component.html',
  styleUrls: ['./anime-nav-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimeNavContainerComponent {

  @Input() animeNavs: AnimeNav[] = [];

}
