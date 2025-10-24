import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    App,
  ],
  providers: [
    //ovideBrowserGlobalErrorListeners(),
    //ovideZonelessChangeDetection()
  ],
  //bootstrap: [App]
})
export class AppModule { }
bootstrapApplication(App);
