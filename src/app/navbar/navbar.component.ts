import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../Services/search.service';
import { HostListener } from '@angular/core';

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
    private renderer: Renderer2, 
    private el: ElementRef
  ) { }

  toggleDropdown(menuId: string): void {
    var menu = document.getElementById(menuId) as HTMLUListElement;
    if (menu) {
      menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    }
  }
  ngOnInit(): void {
    this.onWindowScroll();
    this.cdr.detectChanges();
  }
  ngAfterViewInit() {

  }
 
  searchQuery: string = ''; // Variable pour stocker la valeur du champ de recherche

  onSearch(): void {
    this.searchService.search(this.searchQuery);
    this.cdr.detectChanges();
  }

  private lastScrollPosition = 0;


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > this.lastScrollPosition) {
      // Scroll down
      this.renderer.setStyle(this.el.nativeElement, 'top', `-${this.el.nativeElement.offsetHeight}px`);
    } else {
      // Scroll up
      this.renderer.setStyle(this.el.nativeElement, 'top', '0');
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}

