import { Component, OnInit } from '@angular/core';
import { Colors } from './colors';

@Component({
  selector: 'app-for-structure',
  template: `<div>
    <div *ngFor="let color of data.color; odd as f">
      <h2 (click)="logMessage(color)">{{ color }}</h2>
    </div>
    {{ name }}
    {{ color }}
  </div>`,
  styleUrls: ['./for-structure.component.css'],
})
export class ForStructureComponent implements OnInit {
  data: Colors = {
    color: ['red', 'green', 'orange', 'yello'],
  };
  public name = 'shahabz';
  public color = '';
  constructor() {}

  ngOnInit(): void {}

  logMessage(value) {
    this.color = value;
    console.log(value);
  }
}
