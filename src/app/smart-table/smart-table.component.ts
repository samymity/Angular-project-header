import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})


export class SmartTableComponent {
  constructor() { }

  ngOnInit(): void {
  }

  
  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Name',
      },
      age: {
        title: 'Age',
      },
    },
  };

  data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
  ];
}
