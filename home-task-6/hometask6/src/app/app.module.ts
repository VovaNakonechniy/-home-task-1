import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSmartCounterComponent } from './app-smart-counter/app-smart-counter.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HexToRgbComponent } from './hex-to-rgb/hex-to-rgb.component';
import { HexToRgb } from './hex-to-rgb/hex-to-rgb.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSmartCounterComponent,
    HexToRgbComponent,
    HexToRgb,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
