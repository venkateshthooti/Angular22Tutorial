import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const astrics="**** **** ****"
    const last4Char=value.slice(-4)
    return astrics+last4Char;
  }
 
}
