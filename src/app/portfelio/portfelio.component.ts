import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfelio',
  templateUrl: './portfelio.component.html',
  styleUrls: ['./portfelio.component.css']
})
export class PortfelioComponent implements OnInit {

  showMore: boolean = false;

  ngOnInit(): void {
   this.  toggleReadMore()
  }

  toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
    this.showMore = true;
    // Vérifier si dots n'est pas null avant d'accéder à ses propriétés
    if (dots && moreText && btnText) {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    }
  }
  
  

}
