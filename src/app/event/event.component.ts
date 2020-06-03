import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <div>
      {{ greeting }}<br />
      <button (click)="handleClick()">Click</button><br />
      <button (mouseover)="handleClick()">Enter</button><br />
      <button (click)="greeting = 'hello shahbaz'">in Line</button>
    </div>
  `,
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  public greeting = '';
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    console.log('hello');
    this.greeting = 'hello shahbaz';
  }
}
