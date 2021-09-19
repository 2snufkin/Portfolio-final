import {Component, OnInit} from '@angular/core';
import {Competence} from '../interfaces/competence';
import {CompetenceService} from '../competence.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})


export class CompetencesComponent implements OnInit {

  competence: Competence[] = [];
  tools: Competence[] = [];
  framework: Competence[] = [];

  constructor(private compService: CompetenceService) {

  }

  ngOnInit() {
    this.competence = this.compService.development;
    this.framework  = this.compService.framework;
    this.tools = this.compService.tools;
  }


}
