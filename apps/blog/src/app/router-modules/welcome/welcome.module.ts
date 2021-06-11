import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { VideoBackgroundModule } from '@jing-qi/video-background';
import { QuoteComponent } from './quote/quote.component';
import { StartButtonComponent } from './start-button/start-button.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    QuoteComponent,
    StartButtonComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    VideoBackgroundModule
  ]
})
export class WelcomeModule { }
