import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/Models/ActionModel';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
 
 action : any
  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const numericId = Number(id);
    if (!isNaN(numericId)) {
      // Filtrer la liste d'actions pour obtenir celle avec l'ID spécifié
      this.action = Action.find(a => a.IdAction === numericId);
      // Vérifier si l'objet action est défini avant de déclencher la détection des changements
      if (this.action) {
        this.cdr.detectChanges();
      }
    }
  }
  ngAfterViewInit(): void {
    
  }
}
