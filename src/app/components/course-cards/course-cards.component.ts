import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-cards',
  templateUrl: './course-cards.component.html',
  styleUrls: ['./course-cards.component.scss']
})
export class CourseCardsComponent implements OnInit {
  courseCategories: any[] = [
    {
      id: 'development',
      name: 'Development',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht '
    },
    {
      id: 'it-software',
      name: 'IT & Software',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht '
    },
    {
      id: 'office-productivity',
      name: 'Office Productivity',
      description: 'sf g sdfg sfg s g s g sfg sd fg s gs 5g erg sdg rsg ser g serg seg rsd dg fh dgh  gdh gd h dg h dt  rhst h t ht '
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showCategory(id) {
    this.router.navigate(
      [
        {
          outlets:
          {
            primary: [id],
            sidemenu: [id]
          }
        }
      ],
      { relativeTo: this.route }
    );
  }

}
