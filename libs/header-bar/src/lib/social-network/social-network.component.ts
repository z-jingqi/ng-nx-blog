import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SocialNetwork } from '../models';

@Component({
  selector: 'jing-qi-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialNetworkComponent {

  @Input() socialNetworks: Partial<SocialNetwork>[] = [];

}
