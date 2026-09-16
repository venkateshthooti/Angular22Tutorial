import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives {

  // isSuccess = true;
  // isDanger = false;
  divBgColor = '';
  ischecked = false;

  divSucess(bgcolor: string) {
    // this.isSuccess = true;
    // this.isDanger = false;
    this.divBgColor = bgcolor;
  }

  // divDanger(bgcolor: string){
  // this.isSuccess = false;
  // this.isDanger = true;
  // this.divBgColor = bgcolor;
  // }
  bgSuccess: string = 'bg-success';
  bgDanger: string = 'bg-danger';
  textSuccess: string = 'text-success';
  textDanger: string = 'text-danger';
  successMessage: string = 'Text is valid';
  dangerMessage: string = 'Text is too long';



  inputText = '';
  lengthStatus = true;
  checkLength(text: string) {

    if (text.length > 5) {
      this.lengthStatus = false;
    } else {
      this.lengthStatus = true;
    }

  }

  inputColorValue: string = '';

  circleStatus: boolean = false;
  Div4shapeType: {} = '';
  changeCircleType(type: string) {
    if (type === 'circle') {
      this.Div4shapeType = {
        'text-align': 'center',
        'background-color': 'red',
        'width': '100px',
        'height': '100px',
        'border-radius': '50%',


        'border': '2px solid black',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'cursor': 'pointer',

      };
    }
    else if (type === 'square') {
      this.Div4shapeType = {
        'background-color': 'green',
        'color': 'black',
        'padding': '20px',
        'width': '100px',
        'height': '100px',
      };
    }
  }
}
