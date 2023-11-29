import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private cdr: ChangeDetectorRef,
  ) { }
  ngOnInit(): void {
  }
  openNav() {
    const sideNav = document.getElementById("mySidenav");
    if (sideNav) {
      sideNav.style.width = "250px";
    }
  }
  
  closeNav() {
    const sideNav = document.getElementById("mySidenav");
    if (sideNav) {
      sideNav.style.width = "0";
    }
  }

  searchQuery: string = ''; 

  onSearch(): void {
    this.searchService.search(this.searchQuery);
    this.cdr.detectChanges();
  }
 

}
