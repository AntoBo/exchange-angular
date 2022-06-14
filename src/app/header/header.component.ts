import { Component, OnInit } from '@angular/core';
import { getCurrAPI } from '../fetchAPI';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    getCurrAPI();
  }
}
