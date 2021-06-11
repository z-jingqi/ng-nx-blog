import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { VideoBackgroundModule } from '@jing-qi/video-background';
import { AnimeNavModule } from '@jing-qi/anime-nav';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    VideoBackgroundModule,
    AnimeNavModule
  ]
})
export class WelcomeModule { }
