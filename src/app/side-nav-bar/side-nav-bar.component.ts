import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor(
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

  prevScrollpos = window.pageYOffset;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('open');

    if (navbar) {
      // Vérifier si l'élément est non null avant de manipuler les styles
      if (this.prevScrollpos > currentScrollPos) {
        navbar.style.top = '0';
      } else {
        navbar.style.top = '-100px';
      }

      this.prevScrollpos = currentScrollPos;
    }
  }
 

}
