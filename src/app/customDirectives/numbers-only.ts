import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnly {

  constructor(private elementRef:ElementRef){

  }

  @HostListener('keypress', ['$event'])
  onUserInput(event:KeyboardEvent){

    debugger
    const allowedNumbers=/[0-9]/;
    //If user enter other than numbers it will block  
    if(!allowedNumbers.test(event.key)){
      event.preventDefault();

    }

  }

}
