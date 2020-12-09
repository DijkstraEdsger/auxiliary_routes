import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.scss']
})
export class CourseCategoryComponent implements OnInit {
  courseCategories: any[] = [
    {
      name: 'Development',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht '
    },
    {
      name: 'IT & Software',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht '
    },
    {
      name: 'Office Productivity',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht '
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
