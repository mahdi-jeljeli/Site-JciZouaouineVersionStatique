import { Component, OnInit } from '@angular/core';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  searchQuery: string = ''; // Variable pour stocker la valeur du champ de recherche

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

