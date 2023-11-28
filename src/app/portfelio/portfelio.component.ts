import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfelio',
  templateUrl: './portfelio.component.html',
  styleUrls: ['./portfelio.component.css']
})
export class PortfelioComponent implements OnInit {
  private modal: HTMLElement | null;
  private btn: HTMLElement | null;
  private span: HTMLElement | null;

  constructor() {
    // Initialisation des éléments du DOM
    this.modal = document.getElementById("myModal") as HTMLElement;
    this.btn = document.getElementById("myBtn") as HTMLElement;
    this.span = document.getElementsByClassName("close")[0] as HTMLElement;
  }

  ngOnInit(): void {
    // Configuration des gestionnaires d'événements après l'initialisation du composant
    if (this.btn) {
      this.btn.onclick = () => {
        this.openModal();
      };
    }

    if (this.span) {
      this.span.onclick = () => {
        this.closeModal();
      };
    }

    window.onclick = (event) => {
      if (this.modal && event.target == this.modal) {
        this.closeModal();
      }
    };
  }

  openModal(): void {
    if (this.modal) {
      this.modal.style.display = "block";
    }
  }

  closeModal(): void {
    if (this.modal) {
      this.modal.style.display = "none";
    }
  }
}
