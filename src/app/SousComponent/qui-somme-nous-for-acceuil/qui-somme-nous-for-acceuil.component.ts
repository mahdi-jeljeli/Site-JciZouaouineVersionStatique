import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qui-somme-nous-for-acceuil',
  templateUrl: './qui-somme-nous-for-acceuil.component.html',
  styleUrls: ['./qui-somme-nous-for-acceuil.component.css']
})
export class QuiSommeNousForAcceuilComponent implements OnInit {
  showMoreONQuiSommeNous: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleReadMoreForQuiSommeNous() {
    this.showMoreONQuiSommeNous = !this.showMoreONQuiSommeNous;
  }
}
