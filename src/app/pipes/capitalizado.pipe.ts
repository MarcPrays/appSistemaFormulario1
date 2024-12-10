import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
  standalone: false
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
