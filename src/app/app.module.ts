import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

import { BooksComponent } from './books/books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';


import { MagazinesComponent } from './magazines/magazines.component';

import { AdBooksComponent } from './ad-books/ad-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewspapersComponent } from './newspapers/newspapers.component';

import { BooksDetailsComponent } from './books-details/books-details.component';
import { AdMagazinesComponent } from './ad-magazines/ad-magazines.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';

import { DataTablesModule } from 'angular-datatables';


import { TakeBookComponent } from './take-book/take-book.component';
import { IssuedbooksComponent } from './issuedbooks/issuedbooks.component';
import { NewspapersAdminComponent } from './newspapers-admin/newspapers-admin.component';
import { AddNewspaperComponent } from './add-newspaper/add-newspaper.component';
import { UpdateNewspaperComponent } from './update-newspaper/update-newspaper.component';
import { ViewRegisteredusersComponent } from './view-registeredusers/view-registeredusers.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminIssuedbooksComponent } from './admin-issuedbooks/admin-issuedbooks.component';











@NgModule({
  declarations: [
    AppComponent,
  
    RegistrationComponent,
    HomeComponent,
    
    BooksComponent,
    UpdateBooksComponent,
  
    
    MagazinesComponent,

    AdBooksComponent,
    AddBooksComponent,
    AdminHomeComponent,
    NewspapersComponent,
  
    BooksDetailsComponent,
    AdMagazinesComponent,
    UpdateMagazineComponent,
    AddMagazineComponent,

    
  
    
    TakeBookComponent,
    IssuedbooksComponent,
    NewspapersAdminComponent,
    AddNewspaperComponent,
    UpdateNewspaperComponent,
    
    ViewRegisteredusersComponent,
    
    AdminComponent,
    
    LoginComponent,
    
    AdminIssuedbooksComponent,
    
    
    
    
    
    
    
    
    
  
  
  
    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
