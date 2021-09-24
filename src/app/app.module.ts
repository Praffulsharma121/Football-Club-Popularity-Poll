import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FcBarcelonaComponent } from './fc-barcelona/fc-barcelona.component';
import { RealMadridComponent } from './real-madrid/real-madrid.component';
import { FcBayernMunichComponent } from './fc-bayern-munich/fc-bayern-munich.component';
import { LiverpoolComponent } from './liverpool/liverpool.component';

@NgModule({
  declarations: [
    AppComponent,
    FcBarcelonaComponent,
    RealMadridComponent,
    FcBayernMunichComponent,
    LiverpoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
