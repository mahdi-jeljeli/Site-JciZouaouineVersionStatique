import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Action } from '../Models/ActionModel'

@Component({
  selector: 'app-nos-actions',
  templateUrl: './nos-actions.component.html',
  styleUrls: ['./nos-actions.component.css']
})
export class NOSACTIONSComponent implements OnInit {
  urll : string = "C:\\1.jpg";
  constructor() { }
  ngOnInit(): void {
  }

}
