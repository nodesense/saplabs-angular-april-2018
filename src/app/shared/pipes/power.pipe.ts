import { Pipe, PipeTransform } from '@angular/core';


// {{ 2 | power: 3}} ==>  2 ^ 3
// {{ 2 | power}} ==>  2 ^ 1 (default 1)

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }

}
