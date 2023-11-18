import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
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

  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    // Handle date changes if needed
  }

  ngOnInit(): void {
  }

}
