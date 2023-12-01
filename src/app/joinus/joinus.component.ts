import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MembreRequest } from '../Models/Membre';
import { EmailRequest } from '../Models/EmailRequest';
import { MemberServicesService } from '../Services/member-services.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
 
  constructor(
    private fb: FormBuilder,
    private _MemberServicesService : MemberServicesService,
    private router: Router,
  ) { }

  JoinUsForm: FormGroup = this.fb.group({
    FirsLastName: ['', [Validators.required]],
    DateOfBirth: ['',],
    Email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
    education: ['', [Validators.required]],
    ProfOccupation: [''],
    How: ['', [Validators.required]],
    Why: ['', [Validators.required]],
    Interisting: ['', [Validators.required]],

  });

  //this model not yet used but we can need it later
  _MembreRequest: MembreRequest = {
    FirsLastName: "",
    DateOfBirth: "",
    Email: "",
    phone: "",
    education: "",
    ProfOccupation: "",
    How: "",
    Why: "",
    Interisting: "",
  }


  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    // Handle date changes if needed
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }


  onSubmit() {
    let formData: EmailRequest | null = null;// Declare formData outside the if block
  
    if (this.JoinUsForm.valid) {
      formData = {
        Email: "Mahdijeljli1@gmail.com",
        Subject: 'New Membre Request',
        Message: JSON.stringify(this.JoinUsForm.value)
      };
    }
  
    if (formData) { // Check if formData is defined before making the request
      this._MemberServicesService.EmailRequestForJoinUs(formData).subscribe({
        next: (result) => {
          if (result && result.message === "1") {
            alert("Registration successful!");
            this.router.navigateByUrl('Acceuil');
          }
        },
        error: (err) => {
          console.error(err);
          alert("Une erreur s'est produite lors de votre inscription.");
        }
      });
    } else {
      alert("Form is not valid. Please check your inputs.");
    }
  }
  
}
