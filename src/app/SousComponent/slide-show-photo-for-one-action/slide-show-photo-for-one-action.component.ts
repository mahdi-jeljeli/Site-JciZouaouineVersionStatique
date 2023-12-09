import { ChangeDetectorRef, Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Galerie } from 'src/app/Models/Galerie';
@Component({
  selector: 'app-slide-show-photo-for-one-action',
  templateUrl: './slide-show-photo-for-one-action.component.html',
  styleUrls: ['./slide-show-photo-for-one-action.component.css']
})
export class SlideShowPhotoForOneActionComponent implements OnInit, AfterViewInit {

  galerie: any[] = [];  // Liste d'images
  slideIndex: number = 0;
  @Input() actionId: number | undefined;

  constructor(private cdr: ChangeDetectorRef,) { }


  ngOnInit(): void {
    // Filtrer la liste d'actions pour obtenir celle avec l'ID spécifié
    this.galerie = Galerie.filter(photo => photo.IdAction === this.actionId);
    // Vérifier si l'objet action est défini avant de déclencher la détection des changements
    if (this.galerie) {

      this.cdr.detectChanges();
    }
  }
  ngAfterViewInit(): void {

    this.showSlides(this.slideIndex);
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
  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }
}