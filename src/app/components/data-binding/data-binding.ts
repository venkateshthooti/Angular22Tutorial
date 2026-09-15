import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {

  productName: string = 'Mobile Phone';
  productPrice: number = 500;
  maxLengthChar: number = 5;
  myDynamicTypeAttribute: string = 'text';
  circleText: string = 'Circle';
  isCheckedCheckbox: boolean = true;

  changeInputTypeTexttoRadio() {
    //this.productName = 'Laptop';
    this.myDynamicTypeAttribute = 'radio';
    console.log("This will be called first : Input type changed to radio button ");
  }
  showWelcomeMessage() {
    alert('Welcome to Angular Tutorial');
    console.log("This will be called second : Welcome message displayed ");
  }
  onChangeDropdownEvent(myEvent: Event) {
    // This will give error as target is of type EventTarget and it does not have value property. So we need to typecast it to HTMLSelectElement it works for any type of input element like text, radio, checkbox, select etc. So we need to typecast it to HTMLInputElement or HTMLSelectElement or HTMLTextAreaElement etc. depending on the type of input element we are using.
    // alert("Dropdown value changed to : " + myEvent.target.value); 
    
    console.log("seelct element object : " + myEvent);
    const selectElement = myEvent.target as HTMLSelectElement;
    alert("Dropdown value changed to : " + selectElement.value);
  }
 onMouseEnterCircle(myEvent: MouseEvent) {
 

  // const circleElement = myEvent.currentTarget as HTMLDivElement;
  // circleElement.style.backgroundColor = 'lightblue';
  // console.log("Circle element object2:", circleElement);

  this.circleText = 'Mouse Entered';
}

onMouseLeaveCircle(myEvent: MouseEvent) {
  // const circleElement = myEvent.currentTarget as HTMLDivElement;
  // circleElement.style.backgroundColor = 'white';
  // console.log("Circle element object:", circleElement);

  this.circleText = 'Circle';
}


}
