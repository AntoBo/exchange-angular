import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  curr1 = '';
  amount1 = 0;
  curr2 = '';
  amount2 = 0;

  @Input() currencies: any = [];
  @Input() rates: any = [];

  onSelectCurr1(event: any) {
    this.curr1 = event.target.value;
  }

  onSelectCurr2(event: any) {
    this.curr2 = event.target.value;
  }
  onInputCurr1(event: any) {
    this.amount1 = event.target.value;
  }
  onInputCurr2(event: any) {
    this.amount2 = event.target.value;
  }
}
