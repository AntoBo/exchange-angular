import { Component, OnInit } from '@angular/core';
import { getCurrAPI } from './fetchAPI';

interface Data {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Currency exchange';
  data = { UAH: 0, EUR: 0 };
  uahRate = '';
  eurRate = '';
  ngOnInit() {
    getCurrAPI()
      .then((res) => {
        this.data = res;
        this.uahRate = this.data.UAH.toFixed(2);
        this.eurRate = (this.data.UAH / this.data.EUR).toFixed(2);
      })
      .catch((err) => console.error(err));
  }
}
