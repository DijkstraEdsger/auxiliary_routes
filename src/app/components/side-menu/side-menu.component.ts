import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        console.log('params', params['id']);
      }
    });
  }

  ngOnInit(): void {
  }

}
