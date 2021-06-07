import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocialNetwork } from '../models';

@Component({
  selector: 'jing-qi-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent {
  socialNetworks: Partial<SocialNetwork>[] = [
    { name: '', iconClass: '', url: '', tooltip: '' },
    { name: '', iconClass: '', url: '', tooltip: '' },
    { name: '', iconClass: '', url: '', tooltip: '' },
    { name: '', iconClass: '', url: '', tooltip: '' },
    { name: '', iconClass: '', url: '', tooltip: '' },
    { name: '', iconClass: '', url: '', tooltip: '' },
    { name: '', iconClass: '', url: '', tooltip: '' }
  ];
}
