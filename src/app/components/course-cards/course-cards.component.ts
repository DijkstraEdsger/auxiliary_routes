import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCategoryService } from 'src/app/services/course-category.service';

@Component({
  selector: 'app-course-cards',
  templateUrl: './course-cards.component.html',
  styleUrls: ['./course-cards.component.scss'],
})
export class CourseCardsComponent implements OnInit {
  courseCategories: any[] = [];
  isLoading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseCategoriesService: CourseCategoryService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.courseCategoriesService.getCoursesCategories().subscribe((data) => {
      this.isLoading = false;
      this.courseCategories = data;
      console.log(this.courseCategories);
    });
  }

  showCategory(id) {
    this.router.navigate(
      [
        {
          outlets: {
            primary: [id],
            sidemenu: [id],
          },
        },
      ],
      { relativeTo: this.route }
    );
  }
}
