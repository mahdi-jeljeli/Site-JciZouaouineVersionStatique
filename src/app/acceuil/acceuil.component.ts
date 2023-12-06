import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
 
  showMoreForMission: boolean = false;
  showMoreONvision: boolean = false;
  showMoreONCreads: boolean = false;
  showMoreONQuiSommeNous: boolean = false;

  @ViewChild('ourProjectSection') ourProjectSection!: ElementRef;
  constructor() {}

  ngOnInit(): void {

    // this.searchService.searchResults;

  }

}
