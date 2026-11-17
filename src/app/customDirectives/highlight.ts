import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  @Input() textColor:string='red'

  constructor(private elementRef:ElementRef){
    console.log("Highlight directive executed")
     
  }

  @HostListener('mouseenter')
  onMouseHover(){
    console.log('Mouse entered')
    this.elementRef.nativeElement.style.color=this.textColor
  }

  @HostListener('mouseleave')
  onMouseLeftElement(){
    console.log('Mouse left')
    this.elementRef.nativeElement.style.color='green'
  }

  @HostListener('click')
  onClickElement(){
    console.log('Clicked on element')
    this.elementRef.nativeElement.style.color='black'
  }

}
