import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('contactUsFooter')
  contactUsFooter!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleDropdown(menuId: string): void {
    var menu = document.getElementById(menuId) as HTMLUListElement;
    if (menu) {
      menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    }
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // Now it's safe to access this.contactUsFooter
    this.scrollToContactUs();
}

  
  scrollToContactUs() {
    if (this.contactUsFooter) {
        const footerElement = this.contactUsFooter.nativeElement;
        this.renderer.setProperty(document.documentElement, 'scrollTop', footerElement.offsetTop);
    }
}
}
