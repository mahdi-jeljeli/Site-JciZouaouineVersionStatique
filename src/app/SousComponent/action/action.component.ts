import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionServicesService } from 'src/app/Services/action-services.service';
import { Lightbox } from 'ngx-lightbox'; 


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  template: `
  <!-- ... existing template content ... -->
  <ngx-lightbox>

  </ngx-lightbox>
`,
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
 
  action : any;
  constructor(
    private ActionServices: ActionServicesService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const numericId = Number(id);
    if (!isNaN(numericId)) {
      this.ActionServices.getOneAcition(numericId).subscribe({
        next: (result) => {
          this.action = result;
          console.log(this.action)
        }
      });
    }
  }

}
