import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', // .app-test and then use as class // [app-test] and then use as a attribute
  template: `<div>
    <p>I am from Test component</p>
    <span>what</span>
    <h2>{{ greeting() }}</h2>
    <h2>{{ 'hello ' + name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ url }}</h2>
  </div>`,
  styles: [
    `
      div p {
        color: red;
      }
      div span {
        color: green;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'shahbaz';
  public url = window.location.href; // cant do it directly in interpolation -> {{}}
  constructor() {}

  ngOnInit(): void {}

  greeting() {
    return 'welcome ' + this.name;
  }
}
