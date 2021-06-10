import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBackgroundComponent } from './video-background/video-background.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    VideoBackgroundComponent
  ],
  exports: [VideoBackgroundComponent]
})
export class VideoBackgroundModule { }
