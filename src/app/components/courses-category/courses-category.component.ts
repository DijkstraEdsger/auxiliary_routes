import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseCategoryService } from 'src/app/services/course-category.service';

@Component({
  selector: 'app-courses-category',
  templateUrl: './courses-category.component.html',
  styleUrls: ['./courses-category.component.scss'],
})
export class CoursesCategoryComponent implements OnInit {
  courseCategory: any;
  isLoading: boolean;

  constructor(
    private courseCategoriesService: CourseCategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.isLoading = true;
      this.courseCategoriesService
        .getCourseCategory(params['id'])
        .subscribe((data) => {
          this.isLoading = false;
          this.courseCategory = data;
          console.log(this.courseCategory);

        });
    });
  }
}
