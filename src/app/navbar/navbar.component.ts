import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('contactUsFooter')
  contactUsFooter!: ElementRef;

  constructor(
    private router: Router,
    private searchService: SearchService,
    private cdr: ChangeDetectorRef,
  ) { }

  toggleDropdown(menuId: string): void {
    var menu = document.getElementById(menuId) as HTMLUListElement;
    if (menu) {
      menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    }
  }
  ngOnInit(): void {
    this.cdr.detectChanges();
  }
  ngAfterViewInit() {

  }
 
  searchQuery: string = ''; // Variable pour stocker la valeur du champ de recherche

  onSearch(): void {
    this.searchService.search(this.searchQuery);
    this.cdr.detectChanges();
  }
}
