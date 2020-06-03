import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-structure',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'" class="danger">You picked red color</div>
      <div *ngSwitchCase="'green'" class="success">You picked green color</div>
      <div *ngSwitchCase="'blue'" class="other">You picked blue color</div>
      <div *ngSwitchDefault>Pcik again</div>
    </div>
  `,
  styles: [
    `
      .success {
        color: green;
      }
      .danger {
        color: red;
      }
      .other {
        color: blue;
      }
    `,
  ],
})
export class SwitchStructureComponent implements OnInit {
  public color = 'green';
  constructor() {}

  ngOnInit(): void {}
}
