import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jing-qi-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
