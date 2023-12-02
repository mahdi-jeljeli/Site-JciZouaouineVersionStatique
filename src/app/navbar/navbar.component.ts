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
  }
  ngAfterViewInit() {

  }
 
  searchQuery: string = ''; // Variable pour stocker la valeur du champ de recherche

  onSearch(): void {
    this.searchService.search(this.searchQuery);
    this.cdr.detectChanges();
  }

  prevScrollpos = window.pageYOffset;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    if (navbar) {
      // Vérifier si l'élément est non null avant de manipuler les styles
      if (this.prevScrollpos > currentScrollPos) {
        navbar.style.top = '0';
      } else {
        navbar.style.top = '-120px';
      }

      this.prevScrollpos = currentScrollPos;
    }
  }

}

