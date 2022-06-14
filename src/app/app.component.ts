import { Component, OnInit } from '@angular/core';
import { getCurrAPI } from './fetchAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Currency exchange';
  uahRate = '';
  eurRate = '';
  ngOnInit() {
    getCurrAPI()
      .then((res) => {
        this.uahRate = res.UAH.toFixed(2);
        this.eurRate = (res.UAH / res.EUR).toFixed(2);
      })
      .catch((err) => console.error(err));
  }
}
