import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { WelcomeUIStore } from './welcome-ui.store';
import * as videos from '../../../../assets/data/videos.json';
import * as posters from '../../../../assets/data/posters.json';
import { WelcomeUIQuery } from './welcome-ui.query';

@Injectable({ providedIn: 'root' })
export class WelcomeUIService {

  constructor(
    private welcomeUIStore: WelcomeUIStore,
    private welcomeUIQuery: WelcomeUIQuery,
    private http: HttpClient
  ) {
  }

  getVideoData() {
    const videoUrl = this.getRandomDataInArray(videos);
    const posterUrl = this.getRandomDataInArray(posters);
    const id: ID = Math.random();
    this.welcomeUIStore.add({ id, videoUrl, posterUrl });
  }

  private getRandomDataInArray(data: string[]): string {
    const length = data.length;
    const index = Math.floor(Math.random() * length);
    return data[index];
  }
}
