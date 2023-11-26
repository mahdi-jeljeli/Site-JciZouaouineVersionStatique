import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionServicesService } from 'src/app/Services/action-services.service';
import { Lightbox } from 'ngx-lightbox'; 


interface Image {
  src: string;
  caption: string;
  thumb: string;  // Ajoutez la propriété thumb
}
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  template: `
  <!-- ... existing template content ... -->
  <ngx-lightbox>

  </ngx-lightbox>
`,
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  images: Image[] = []; // Utilisez le type défini
  action : any;
  constructor(
    private ActionServices: ActionServicesService,
    private route: ActivatedRoute,
    private lightbox: Lightbox
  ) { }
  ngOnInit(): void {
    this.images = [
      { src: 'assets/images/proj4.jpg', caption: 'Image 1', thumb: 'url_de_la_vignette_1.jpg' },
      { src: 'assets/images/proj4.jpg', caption: 'Image 2', thumb: 'url_de_la_vignette_2.jpg' },
      { src: 'assets/images/proj4.jpg', caption: 'Image 3', thumb: 'url_de_la_vignette_3.jpg' },
      { src: 'assets/images/proj4.jpg', caption: 'Image 3', thumb: 'url_de_la_vignette_3.jpg' },
      { src: 'assets/images/proj4.jpg', caption: 'Image 3', thumb: 'url_de_la_vignette_3.jpg' },
      { src: 'assets/images/proj4.jpg', caption: 'Image 3', thumb: 'url_de_la_vignette_3.jpg' },
      { src: 'assets/images/proj4.jpg', caption: 'Image 3', thumb: 'url_de_la_vignette_3.jpg' },
      { src: 'assets/images/proj4.jpg', caption: 'Image 3', thumb: 'url_de_la_vignette_3.jpg' },
    ];
  }
  open(index: number): void {
    const albums = this.images.map(image => ({ src: image.src, caption: image.caption, thumb: image.thumb }));
    console.log('Albums:', albums);
    this.lightbox.open(albums, index);
  }
  
  ngAfterViewInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const numericId = Number(id);
    if (!isNaN(numericId)) {
      this.ActionServices.getOneAcition(numericId).subscribe({
        next: (result) => {
          this.action = result;
          console.log(this.action)
        }
      });
    }
  }

}
