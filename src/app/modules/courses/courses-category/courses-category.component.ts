import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-category',
  templateUrl: './courses-category.component.html',
  styleUrls: ['./courses-category.component.scss']
})
export class CoursesCategoryComponent implements OnInit {
  subCategories: any[] = [
    {
      id: '',
      name: 'subCategory11',
    },
    {
      id: '',
      name: 'subCategory11',
    },
    {
      id: '',
      name: 'subCategory11',
    },
    {
      id: '',
      name: 'subCategory11',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
