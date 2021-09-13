import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponent {
  @Input() firstName:string = "";
  @Output() fullName = new EventEmitter<string>();

  public lastName:string = "";

  addLastName(): void {
    this.lastName = "Doe";
    this.fullName.emit(this.firstName+" "+"Doe");
  }

}
