import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.scss',
})
export class TemplateForm {

  companyObj: any = {
    "companyId": 0,
    "companyName": "",
    "pinCode": "",
    "address": "",
    "phone": ""
  }
  onSaveComapny(formref: NgForm) {
    if (formref.invalid) {
      alert("please fill all required fields")
    } else {
      confirm("Are you sure you want to save")
      const fromValue = this.companyObj
      debugger;
    }

  }
  onPincodeChange(){
    console.log("ngModelChange triggered for pincode changes")
  }
  constructor() {

  }
  companyInputErrors(ref: NgModel) {

    console.log(ref.errors, "aaaaaaa")
  }
}
