import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Action } from '../Models/ActionModel'
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nos-actions',
  templateUrl: './nos-actions.component.html',
  styleUrls: ['./nos-actions.component.css']
})
export class NOSACTIONSComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

}

}
