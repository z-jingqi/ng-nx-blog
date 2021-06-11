import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Nav } from './states/nav-state/nav.model';
import { NavQuery } from './states/nav-state/nav.query';
import { NavService } from './states/nav-state/nav.service';

@Component({
  selector: 'jing-qi-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {

  navItems$!: Observable<Nav[]>;

  constructor(
    private navService: NavService,
    private navQuery: NavQuery
  ) { }

  ngOnInit() {
    this.getNavItems();
    this.selectNavItems();
  }

  getNavItems() {
    this.navService.getNavItems();
  }

  selectNavItems() {
    this.navItems$ = this.navQuery.selectAll();
  }

}
