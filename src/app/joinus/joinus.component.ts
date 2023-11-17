import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }
  addForm: FormGroup = this.fb.group({
    FirsLastName: ['', [Validators.required]],
    DateOfBirth: ['',],
    Email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    education: ['', [Validators.required]],
    ProfOccupation: [''],
    How: ['', [Validators.required]],
    Why: ['', [Validators.required]],
    Interisting: ['', [Validators.required]],

  });
  ngOnInit(): void {
  }

}
