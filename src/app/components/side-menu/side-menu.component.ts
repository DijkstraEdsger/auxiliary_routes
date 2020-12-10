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
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private courseCategoriesService: CourseCategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        console.log('params', params['id']);
        this.isLoading = true;
        this.courseCategoriesService
          .getSubCategoriesOfCourseCategory(params['id'])
          .subscribe((data) => {
            this.isLoading = false;
            this.list = data;
          });
      } else {
        this.isLoading = true;
        this.courseCategoriesService
          .getCoursesCategories()
          .subscribe((data) => {
            this.isLoading = false;
            this.list = data;
          });
      }
    });
  }
}
