import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <div>
      <h2>{{ title }}</h2>
      <h2 [style.color]="'orange'">Style Binding</h2>
      <h2 [style.color]="'indianred'">Style property Binding</h2>
      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
      <h2 [ngStyle]="styleBinding">Style Binding Object</h2>
    </div>
  `,
})
export class AnotherComponent implements OnInit {
  public title = 'i Am from another';
  public hasError = false;
  public classColor = 'indianred';
  public styleBinding = {
    color: 'purple',
    fontStyle: 'italic',
  };
  constructor() {}

  ngOnInit(): void {}
}
