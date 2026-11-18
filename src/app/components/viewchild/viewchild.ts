import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pipes } from '../pipes/pipes';

@Component({
  selector: 'app-viewchild',
  imports: [Pipes,],
  templateUrl: './viewchild.html',
  styleUrl: './viewchild.scss',
})
export class Viewchild implements OnInit ,AfterViewInit {

  @ViewChild('tempRefInputName') inputTextRef!:ElementRef;
  //  textref = viewChild<ElementRef>('tempRefName');
  @ViewChild('Div11') div11!:ElementRef
  @ViewChild(Pipes) pipeComponentInstance!: Pipes

  readIputTextValue(){
    if(this.inputTextRef){
      const value=this.inputTextRef.nativeElement.value
      console.log("Input value is = "+ value)
      alert("Input value is = "+ value)
    }
  }

  addBgColor(color:string){
    if(this.div11){
      const value=this.div11.nativeElement.style.backgroundColor=color
    }
    
  }

  readPipeComponent(){
    debugger
    if(this.pipeComponentInstance){
      const  data=this.pipeComponentInstance.cardNumber
    }
  }

  ngOnInit(): void {
    // this.inputTextRef.nativeElement.value='ngOnInit'
  }

  ngAfterViewInit(): void {
    this.inputTextRef.nativeElement.value='ngAfterViewInit'
  }

}
