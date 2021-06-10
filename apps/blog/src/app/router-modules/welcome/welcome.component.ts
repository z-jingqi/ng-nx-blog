import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { WelcomeUI } from './state/welcome-ui.model';
import { WelcomeUIQuery } from './state/welcome-ui.query';
import { WelcomeUIService } from './state/welcome-ui.service';

@Component({
  selector: 'jing-qi-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {

  videoData$!: Observable<WelcomeUI | undefined>;

  constructor(
    private welcomeUIQuery: WelcomeUIQuery,
    private welcomeUIService: WelcomeUIService
  ) { }

  ngOnInit(): void {
    this.getWelcomeUIData();
    this.queryVideoData();
  }

  getWelcomeUIData() {
    this.welcomeUIService.getVideoData();
  }

  queryVideoData() {
    this.videoData$ = this.welcomeUIQuery.selectFirst();
  }
}
