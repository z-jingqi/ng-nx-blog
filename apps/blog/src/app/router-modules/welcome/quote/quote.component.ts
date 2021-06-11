import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'jing-qi-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteComponent {

  @Input() quote!: string;

}
