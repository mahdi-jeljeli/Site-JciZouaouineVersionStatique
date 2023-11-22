import { Component, OnInit,ChangeDetectorRef, NgZone } from '@angular/core';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {


  constructor(
    private searchService: SearchService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
    ) {}


  getResults(): any[] {
    return this.searchService.getResults();
  }
  
  onSelectResult(): void {
    
    // Mettez à jour le service pour réinitialiser la liste des résultats après avoir choisi un élément
    this.searchService.chooseResult();
  }

  ngOnInit(): void {
   
  }

}
