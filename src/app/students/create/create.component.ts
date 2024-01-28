import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {
  createForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createStudentForm();
  }

  createStudentForm() {
    this.createForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        motherName: ['', Validators.required],
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', Validators.required]
      }),
      communication: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
    })
  }

  get personalInfo() {
    return this.createForm.get('personalInfo');
  }

  get address() {
    return this.createForm.get('address');
  }

  get communication() {
    return this.createForm.get('communication');
  }

  onSubmit() {

  }
}
