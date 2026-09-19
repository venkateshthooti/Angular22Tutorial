import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  })

  formBuilder = inject(FormBuilder)
  studentForm!: FormGroup
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      studentId: [0],
      studentName: ['', [Validators.required, Validators.minLength(6)]],
      emailId: ['', [Validators.required, Validators.email]],
      city: ['']
    })

  }

  onSubmitUserForm() {
    if (this.userForm.invalid) {
      alert("Please provide all valid values")
    } else {
      confirm("Are you sure u want to submit")
      const formValue = this.userForm.value;
     
    }

  }
}

