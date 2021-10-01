import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hex-to-rgb',
  templateUrl: './hex-to-rgb.component.html',
  styleUrls: ['./hex-to-rgb.component.scss']
})
export class HexToRgbComponent{

  public input = new FormControl('');

}
