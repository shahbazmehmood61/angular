import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-structure',
  template: `
    <h2 *ngIf="false; else elseblock">
      Shahbaz Mehmood
    </h2>
    <ng-template #elseblock>
      <h2>Vickey</h2>
    </ng-template>

    <div *ngIf="condition; then success; else failed"></div>

    <ng-template #success>Shahbaz Success</ng-template>
    <ng-template #failed>Shahbaz Failed</ng-template>
  `,
  styleUrls: ['./if-structure.component.css'],
})
export class IfStructureComponent implements OnInit {
  public condition = false;
  constructor() {}

  ngOnInit(): void {}
}
