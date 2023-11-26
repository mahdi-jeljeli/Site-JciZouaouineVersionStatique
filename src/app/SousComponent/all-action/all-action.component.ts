import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/Models/ActionModel';
import { ActionServicesService } from 'src/app/Services/action-services.service';

@Component({
  selector: 'app-all-action',
  templateUrl: './all-action.component.html',
  styleUrls: ['./all-action.component.css']
})
export class AllActionComponent implements OnInit {
  action : any ;
  constructor(private  ActionServices : ActionServicesService ) { }

  ngOnInit(): void {
    this. GetAllAction();
  }

  GetAllAction() {
    // Check if idTache is defined before trying to use it
      this.ActionServices.getAllAcition().subscribe({
        next: (result) => {
          this.action = result;
          console.log(this.action)
        }
      });
    }

}
