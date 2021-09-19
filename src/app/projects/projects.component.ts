import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  ecommerce = false;

  constructor() {
  }

  detailOnClick(project: String) {
    this.ecommerce = !this.ecommerce;
  }

  ngOnInit(): void {
  }

}

