import { Component, Input } from '@angular/core';
import calcRate from 'src/services/calcRate';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  curr1 = 'UAH';
  amount1: number = 0;
  curr2 = 'EUR';
  amount2: number = 0;

  result1 = 0;
  result2 = 0;

  @Input() data: any = [];
  @Input() currencies: any = [];

  onSelectCurr1(event: any) {
    this.curr1 = event.target.value;
    this.result2 = calcRate({
      amount: this.amount1,
      rateFrom: this.data[this.curr2],
      rateTo: this.data[this.curr1],
    });
  }

  onSelectCurr2(event: any) {
    this.curr2 = event.target.value;
    this.result1 = calcRate({
      amount: this.amount2,
      rateFrom: this.data[this.curr1],
      rateTo: this.data[this.curr2],
    });
  }
  onInputCurr1(event: any) {
    this.amount1 = event.target.value;
    this.result2 = calcRate({
      amount: this.amount1,
      rateFrom: this.data[this.curr2],
      rateTo: this.data[this.curr1],
    });
    this.amount2 = this.result2;
  }
  onInputCurr2(event: any) {
    this.amount2 = event.target.value;
    this.result1 = calcRate({
      amount: this.amount2,
      rateFrom: this.data[this.curr1],
      rateTo: this.data[this.curr2],
    });
    this.amount1 = this.result1;
  }
}
