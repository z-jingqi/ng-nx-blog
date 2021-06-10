import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'jing-qi-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoBackgroundComponent   {

  @Input() videoUrl = '';
  @Input() posterUrl = '';

}
