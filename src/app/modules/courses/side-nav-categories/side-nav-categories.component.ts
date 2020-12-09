import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav-categories',
  templateUrl: './side-nav-categories.component.html',
  styleUrls: ['./side-nav-categories.component.scss']
})
export class SideNavCategoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        console.log('params', params['id']);
      }
      console.log('params', params['id']);
    });
  }

  ngOnInit(): void {
  }

}
