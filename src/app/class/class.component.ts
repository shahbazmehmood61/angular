import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  template: `
    <div>
      <h2 class="test-success test-font">Class Binding</h2>
      <h2 [class]="successClass">Class Binding</h2>
      <h2 [ngClass]="conditionalClass">Conditonal calss Binding</h2>
    </div>
  `,
  styles: [
    `
      .test-success {
        color: green;
      }
      .test-danger {
        color: red;
        transition: 2s linear;
      }
      .test-font {
        font-style: italic;
      }
      .test-danger:hover {
        color: yellow;
      }
    `,
  ],
})
export class ClassComponent implements OnInit {
  public hasError = false;
  public successClass = 'test-danger';
  public conditionalClass = {
    'test-success': !this.hasError,
    'test-danger': this.hasError,
    'test-font': !this.hasError,
  };
  constructor() {}

  ngOnInit(): void {}
}
