import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ResService} from '../services/response.service';
//import { AppComponent } from './app.component';
import { RespComponent } from './resp.component';

@NgModule({
  declarations: [
    //AppComponent
    RespComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ResService],
  //bootstrap: [AppComponent]
  bootstrap: [RespComponent]
})
//export class AppModule { }
export class RespModule { }
