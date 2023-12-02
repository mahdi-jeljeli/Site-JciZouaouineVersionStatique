import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfelio',
  templateUrl: './portfelio.component.html',
  styleUrls: ['./portfelio.component.css']
})
export class PortfelioComponent implements OnInit {


  ngOnInit(): void {
  
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
        navbar.style.top = '-50px';
      }

      this.prevScrollpos = currentScrollPos;
    }
  }

}
