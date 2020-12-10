import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseCategoryService } from 'src/app/services/course-category.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  list: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseCategoriesService: CourseCategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        console.log('params', params['id']);
        this.courseCategoriesService
          .getSubCategoriesOfCourseCategory(params['id'])
          .subscribe((data) => {
            this.list = data;
          });
      } else {
        this.courseCategoriesService
          .getCoursesCategories()
          .subscribe((data) => {
            this.list = data;
          });
      }
    });
  }
}
