import {Component} from '@angular/core';
import * as awesome from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  pic = 'assets/images/me.jpg';
  building: any = awesome.faCity;

  email: any = awesome.faMailBulk;
  badge: any = awesome.faGraduationCap;

  home: any = awesome.faLaptopHouse;


  constructor() {

  }


}
