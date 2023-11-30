import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {
  showMoreONQuiSommeNous: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleReadMoreForQuiSommeNous() {
    this.showMoreONQuiSommeNous = !this.showMoreONQuiSommeNous;
  }


}
