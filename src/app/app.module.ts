import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule } from '@angular/forms';
import { NotepadComponent } from './notepad/notepad.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyFormComponent,
    NotepadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
