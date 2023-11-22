import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SearchService } from '../Services/search.service';

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
  scrollToOurProject() {
    this.ourProjectSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  toggleReadMoreForQuiSommeNous() {
    this.showMoreONQuiSommeNous = !this.showMoreONQuiSommeNous;
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

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {

    // this.searchService.searchResults;

  }

}
