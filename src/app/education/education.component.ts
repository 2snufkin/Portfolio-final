import {Component} from '@angular/core';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent {
  details = false;

  constructor() {
  }

  detailOnClick(): void {
    this.details = !this.details;

  }


}
