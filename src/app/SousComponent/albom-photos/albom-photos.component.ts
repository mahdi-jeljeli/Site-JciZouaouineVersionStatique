import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-albom-photos',
  templateUrl: './albom-photos.component.html',
  styleUrls: ['./albom-photos.component.css']
})
export class AlbomPhotosComponent implements OnInit {
  showMore: boolean = false;
  slideIndex = 0;
  constructor() { }
  @ViewChild('ourProjectSection') ourProjectSection!: ElementRef;
  scrollToOurProject() {
    this.ourProjectSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  toggleReadMore() {
    this.showMore = !this.showMore;
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
    const captionText = document.getElementById("caption") as HTMLElement;

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    captionText.innerHTML = dots[this.slideIndex - 1].getAttribute("alt") || '';
  }

}
