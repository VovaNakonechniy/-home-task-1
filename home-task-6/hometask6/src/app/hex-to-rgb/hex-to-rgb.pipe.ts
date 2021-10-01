import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexToRgb'
})
export class HexToRgb implements PipeTransform {
  transform(value: string): string {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
    let rgb = result 
      ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ] 
      : null;
    return rgb ? 'rgb(' + rgb.join(',') + ')' : '';
  }
}

