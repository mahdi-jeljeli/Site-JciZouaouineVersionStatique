import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-for-acceuil',
  templateUrl: './cards-for-acceuil.component.html',
  styleUrls: ['./cards-for-acceuil.component.css']
})
export class CardsForAcceuilComponent implements OnInit {
  showMoreForMission: boolean = false;
  showMoreONvision: boolean = false;
  showMoreONCreads: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleReadMoreForMission() {
    this.showMoreForMission = !this.showMoreForMission;
  }
  toggleReadMoreForVision() {
    this.showMoreONvision = !this.showMoreONvision;
  }
  toggleReadMoreForCreads() {
    this.showMoreONCreads = !this.showMoreONCreads;
  }
}
