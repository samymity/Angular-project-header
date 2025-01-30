import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <p>{{ message }}</p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() message: string = '';

}
