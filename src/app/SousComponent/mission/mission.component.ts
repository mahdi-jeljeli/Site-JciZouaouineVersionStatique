import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  showMoreONQuiSommeNous: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleReadMoreForQuiSommeNous() {
    this.showMoreONQuiSommeNous = !this.showMoreONQuiSommeNous;
  }

}
