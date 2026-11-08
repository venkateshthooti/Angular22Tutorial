import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.scss',
})
export class MyButton {

  @Input() btnText:string=''
  @Input() btnVarient:'success'|'primary'|'danger'='primary'
  @Output() onBtnClick=new EventEmitter<void>();
  
  btnClicked(){
    this.onBtnClick.emit()
  }

}
