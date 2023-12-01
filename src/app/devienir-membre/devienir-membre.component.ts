import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-devienir-membre',
  templateUrl: './devienir-membre.component.html',
  styleUrls: ['./devienir-membre.component.css']
})
export class DevienirMembreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

  }

}
