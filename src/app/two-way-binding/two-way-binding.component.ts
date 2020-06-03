import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <h3 [style.color]="color">Two way binding</h3>
    <h3 [style.color]="'blue'">Two way binding</h3>
    <h3 [style.color]="hasError ? 'red' : 'green'">Two way binding</h3>
    <h3 [ngStyle]="styleObject">Two way binding</h3>
    <input [(ngModel)]="name" />
    {{ name }}
  `,
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  public name = '';
  public hasError = true;
  public color = 'orange';
  public styleObject = {
    color: 'indianred',
    fontSize: '40px',
  };
  constructor() {}

  ngOnInit(): void {}
}
