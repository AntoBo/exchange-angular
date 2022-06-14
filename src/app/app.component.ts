import { Component, OnInit } from '@angular/core';
import { getCurrAPI } from '../services/fetchAPI';

interface Data {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Currency exchange';
  data: any = {};
  currencies: any = [];
  rates: any = [];
  uahRate = '';
  eurRate = '';
  ngOnInit() {
    getCurrAPI()
      .then((res) => {
        this.data = res;
        this.currencies = Object.keys(this.data);
        this.rates = Object.values(this.data);
        this.uahRate = this.data.UAH.toFixed(2);
        this.eurRate = (this.data.UAH / this.data.EUR).toFixed(2);
        // console.log('currencies ', this.currencies);
        // console.log('rates ', this.rates);
      })
      .catch((err) => console.error(err));
  }
}
