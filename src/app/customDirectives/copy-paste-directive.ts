import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appCopyPasteDirective]',
  // host: {
  //   '(click)': 'onClickCopy()',
  // },
})
export class CopyPasteDirective {

  private snackBar = inject(MatSnackBar);
  copyTarget = input<HTMLElement | null>(null);

  constructor(private elementRef: ElementRef<HTMLElement>) {

  }

  @HostListener('click')
  onClickCopy() {
    //  const textOfElement = this.elementRef.nativeElement.innerText;
    //const textOfElement = (this.copyTarget() ?? this.elementRef.nativeElement).innerText;
    const target = this.copyTarget();

    let textOfElement = '';

    if (target !== null) {
      textOfElement = target.innerText;
    } else {
      textOfElement = this.elementRef.nativeElement.innerText;
    }

    //from 25 to 34 lines are used to copied text from "textOfElement" Var 
    navigator.clipboard.writeText(textOfElement)
      .then(() => {

        this.snackBar.open('Copied successfully!', 'Close', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });

      })
      .catch((err) => {
        console.error('Failed to copy text:', err);

        this.snackBar.open('Failed to copy!', 'Close', {
          duration: 2000
        });
      });

  }


}