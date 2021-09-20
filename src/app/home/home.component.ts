import {Component, OnInit} from '@angular/core';

import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  src = 'url(assets/1.jpg)';
  list = ['innovation.start(with_me)'];

  constructor() {
  }


  ngOnInit(): void {
    let options = {
      strings: ['', 'Web', 'Angular', 'Java'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };


    let typed = new Typed('.typed', options);
    typed.reset(true);

  }


}
