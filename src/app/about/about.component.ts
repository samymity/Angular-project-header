import { Component, OnInit } from '@angular/core';

interface Template {
  title: string;
  value: string;
}   


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  templates: Template[] = [
    { title: 'Template 1', value: 'template1' },
    { title: 'Template 2', value: 'template2' },
    { title: 'Template 3', value: 'template3' }
  ];

  selectedTemplate: string | null = null;

  onSelectionChange(value: string) {
    this.selectedTemplate = value;
    console.log('Selected template:', value);
  }
}
