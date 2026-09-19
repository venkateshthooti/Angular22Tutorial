import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-basic',
  imports: [],
  templateUrl: './signal-basic.html',
  styleUrl: './signal-basic.scss',
})
export class SignalBasic {

  empName: string = 'Venkatesh'
  onChangeName() {
    this.empName = 'Chetan Jogi'
  }

  empMobileNo = signal('9821365635')
  isEmpActive: WritableSignal<boolean> = signal(false)

  constructor() {

    setTimeout(() => {
      //debugger;
      this.empName = 'Poonam Sharma'
      // it is a normal variable so this value wont be updated in html(UI) becoz we don't have Zone.js

    }, 5000);

    setTimeout(() => {
      debugger;
      this.empMobileNo.set('700000001220')
      // Without Zone.js also this signal value will be updated in UI
    }, 2000);
  }

  cityList: WritableSignal<string[]> = signal(['hyd', 'Bnglr'
    , 'Pune', 'Mumbai', 'Delhi'])


  onMobileNoChangeUsingSignal() {
    //debugger
    this.empMobileNo.set('8121983843')

    console.log(this.empName,'vvvvvvvvv')
    console.log(this.empMobileNo(),'sssssssssssss')

  }


}
