import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required, schema } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.scss',
})
export class SignalForm {

  empModel=signal({
    empName:'',
    empCity:'',
    empState:''

  })

  empForm=form(this.empModel,(schema)=>{
    required(schema.empName,{message:'Name is required'}),
    required(schema.empCity,{message:'City is required'}),
    minLength(schema.empName,4,{message:'Min 4 char needed'})
    required(schema.empState,{message:'State is required'})
  })

  onSave(){
    const formValue=this.empForm().value()
    debugger;
  }

}
