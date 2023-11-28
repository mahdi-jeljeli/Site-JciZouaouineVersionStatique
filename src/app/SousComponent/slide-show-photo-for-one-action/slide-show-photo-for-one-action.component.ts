import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show-photo-for-one-action',
  templateUrl: './slide-show-photo-for-one-action.component.html',
  styleUrls: ['./slide-show-photo-for-one-action.component.css']
})
export class SlideShowPhotoForOneActionComponent implements OnInit {

  constructor() { }

 
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }
  slideIndex: number = 1;
  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    let slides: NodeListOf<Element> = document.querySelectorAll(".mySlides");
    let dots: NodeListOf<Element> = document.querySelectorAll(".dot");

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    slides.forEach((slide: Element) => {
      (slide as HTMLElement).style.display = "none";
    });

    dots.forEach((dot: Element) => {
      (dot as HTMLElement).className = (dot as HTMLElement).className.replace(" active", "");
    });

    (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
    (dots[this.slideIndex - 1] as HTMLElement).className += " active";
  }

}
