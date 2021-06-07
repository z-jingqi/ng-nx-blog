import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SocialNetwork } from '../../models';

@Component({
  selector: 'jing-qi-social-network-item',
  templateUrl: './social-network-item.component.html',
  styleUrls: ['./social-network-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialNetworkItemComponent {

  @Input() socialNetwork: Partial<SocialNetwork> = {} as Partial<SocialNetwork>;

}
