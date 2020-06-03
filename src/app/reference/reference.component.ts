import { Component, OnInit } from '@angular/core';
import { Hell } from './reference';

@Component({
  selector: 'app-reference',
  template: `
    <div>
      <h1>{{ hell.name }}</h1>
      <h1>{{ hell.class }}</h1>
      <input #my type="text" />
      <button (click)="logMessage(my)">Log</button>
    </div>
  `,
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent implements OnInit {
  hell: Hell = {
    id: 2,
    name: 'shahbaz',
    class: [2, 3, 4],
  };
  constructor() {}

  ngOnInit(): void {
    console.log('hello shahbaz');
  }

  logMessage(myInput) {
    console.log(myInput);
  }
}
