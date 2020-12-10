import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {
  courseCategories: any[] = [
    {
      id: 'development',
      name: 'Development',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht ',
      subCategories: [
        {
          id: 'development-1',
          name: 'Development 1'
        },
        {
          id: 'development-2',
          name: 'Development 2'
        },
        {
          id: 'development-3',
          name: 'Development 3'
        },
      ]
    },
    {
      id: 'it-software',
      name: 'IT & Software',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht ',
      subCategories: [
        {
          id: 'it-software-1',
          name: 'IT & Software 1'
        },
        {
          id: 'it-software-2',
          name: 'IT & Software 2'
        },
        {
          id: 'it-software-3',
          name: 'IT & Software 3'
        },
      ]
    },
    {
      id: 'office-productivity',
      name: 'Office Productivity',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht ',
      subCategories: [
        {
          id: 'office-productivity-1',
          name: 'Office Productivity 1'
        },
        {
          id: 'office-productivity-2',
          name: 'Office Productivity 2'
        },
        {
          id: 'office-productivity-3',
          name: 'Office Productivity 3'
        },
      ]
    }
  ];

  constructor() { }

  getCoursesCategories(): Observable<any> {
    let f = (observer) => {
      setTimeout(() => {
        observer.next(this.courseCategories);
      }, 1000);
    };

    return new Observable(f);
  }

  getCourseCategory(id): Observable<any> {
    let f = (observer) => {
      setTimeout(() => {
        observer.next(this.courseCategories.find(item => item.id === id));
      }, 1000);
    };
    return new Observable(f);
  }

  getSubCategoriesOfCourseCategory(id): Observable<any> {
    let f = (observer) => {
      setTimeout(() => {
        observer.next(this.courseCategories.find(item => item.id === id).subCategories);
      }, 1000);
    };
    return new Observable(f);
  }
}
