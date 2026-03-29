import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AnimalSearch } from './features/animals/animal-search/animal-search';
import { AnimalList } from './features/animals/animal-list/animal-list';
import { Navbar } from './shared/navbar/navbar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Login } from './features/auth/login/login';

@NgModule({
  declarations: [
    App,
    AnimalSearch,
    AnimalList,
    Navbar,
    Login
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
