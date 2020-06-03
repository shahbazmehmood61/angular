import { Component, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-pipes',
  template: `
    <h1>Pipes goes here</h1>
    <h2>{{ data.name }}</h2>
    <h2>{{ data.name | lowercase }}</h2>
    <h2>{{ data.name | uppercase }}</h2>
    <h2>{{ data.title | titlecase }}</h2>
    <h2>{{ price | percent }}</h2>
    <h2>{{ price | currency }}</h2>
    <h2>{{ price | currency: 'GBP' }}</h2>
    <h2>{{ data.date | date: 'short' }}</h2>
    <h2>{{ data.date | date: 'shortDate' }}</h2>
    <h2>{{ data.date | date: 'shortTime' }}</h2>
    <h2>{{ data.date | date: 'medium' }}</h2>
    <h2>{{ data.date | date: 'mediumDate' }}</h2>
  `,
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  public price = 0.25;
  data: Data = {
    name: 'shahabz',
    title: 'title goes here',
    date: new Date(),
  };
  constructor() {}

  ngOnInit(): void {}
}
