import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/Models/ActionModel';
import { ActionServicesService } from 'src/app/Services/action-services.service';

@Component({
  selector: 'app-all-action',
  templateUrl: './all-action.component.html',
  styleUrls: ['./all-action.component.css']
})
export class AllActionComponent implements OnInit {
  data = Action;
  constructor( ) { }

  ngOnInit(): void {
   
  }
}
