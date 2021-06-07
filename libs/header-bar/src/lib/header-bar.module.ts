import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SocialNetworkItemComponent } from './social-network/social-network-item/social-network-item.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [
    HeaderBarComponent,
    SocialNetworkComponent,
    SocialNetworkItemComponent
  ],
  exports: [
    HeaderBarComponent
  ],
})
export class HeaderBarModule { }
