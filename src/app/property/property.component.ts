import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
    <div>
      <input type="text" value="shahbaz" [id]="input" />
    </div>
  `,
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  public input = 'myid';
  constructor() {}

  ngOnInit(): void {}
}
