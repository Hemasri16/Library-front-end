import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

import { BooksComponent } from './books/books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { PageComponent } from './page/page.component';
import { AdminComponent } from './admin/admin.component';
import { MagazinesComponent } from './magazines/magazines.component';

import { AdBooksComponent } from './ad-books/ad-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewspapersComponent } from './newspapers/newspapers.component';
import { LogoutComponent } from './logout/logout.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { AdMagazinesComponent } from './ad-magazines/ad-magazines.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    
    BooksComponent,
    UpdateBooksComponent,
    PageComponent,
    AdminComponent,
    MagazinesComponent,

    AdBooksComponent,
    AddBooksComponent,
    AdminHomeComponent,
    NewspapersComponent,
    LogoutComponent,
    BooksDetailsComponent,
    AdMagazinesComponent,
    UpdateMagazineComponent,
    AddMagazineComponent,
    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
