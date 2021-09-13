import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

export interface cityModel {
  id: number;
  name: string;
};

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('paragraph') paragraph: ElementRef;

  public firstName: string = "John";
  public fullName: string = "";
  public cities: cityModel[] = [
    { id: 1, name: "Lviv" },
    { id: 2, name: "London" },
    { id: 3, name: "Madrid" },
    { id: 4, name: "New York" },
    { id: 5, name: "Krakow" }
  ];
  public citiesShow: boolean = false;

  ngAfterViewInit(): void {
    console.log(this.paragraph.nativeElement.clientWidth,this.paragraph.nativeElement.clientHeight,"DIMENSIONS");
  }

  setFullName(fullName: string): void {
    this.fullName = fullName;
  };

  loadCities(): void {
    this.citiesShow = true; 
  };

}
