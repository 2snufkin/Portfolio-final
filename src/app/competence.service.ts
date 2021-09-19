import {Injectable} from '@angular/core';
import {Competence} from './interfaces/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  private _development: Competence[] =

    [
      {skill: 'Javascript', value: '75', sort: 'development'},
      {skill: 'TypeScript', value: '75', sort: 'development'},
      {skill: 'Java', value: '60', sort: 'development'},
      {skill: 'HTML', value: '100', sort: 'development'},
      {skill: 'Css/Sass', value: '90', sort: 'development'},
      {skill: 'Angular', value: '85', sort: 'development'},
      {skill: 'MySql', value: '95', sort: 'development'},

    ];

  private _framework: Competence[] = [
    {skill: 'Bootstrap', value: '90', sort: 'framework'},
    {skill: 'SpringBoot/Data', value: '70', sort: 'framework'},
    {skill: 'Javascript', value: '70', sort: 'framework'},
    {skill: 'Javascript', value: '70', sort: 'framework'}


  ];


  private _tools: Competence[] = [
    {skill: 'Git', value: '90', sort: 'tools'},
    {skill: 'Docker', value: '60', sort: 'tools'}


  ];


  get development(): Competence[] {
    return this._development;
  }


  get framework(): Competence[] {
    return this._framework;
  }

  get tools(): Competence[] {
    return this._tools;
  }

  constructor() {
  }
}
