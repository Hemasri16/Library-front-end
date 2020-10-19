import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

import { BooksComponent } from './books/books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { PageComponent } from './page/page.component';
import { AdminComponent } from './admin/admin.component';
import { MagazinesComponent } from './magazines/magazines.component';


import { AdBooksComponent } from './ad-books/ad-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewspapersComponent } from './newspapers/newspapers.component';

import { BooksDetailsComponent } from './books-details/books-details.component';
import { AdMagazinesComponent } from './ad-magazines/ad-magazines.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';
import { AdnewspapersComponent } from './adnewspapers/adnewspapers.component';



const routes: Routes = [
  {path:'',component:PageComponent},
  {path:'magazines',component:MagazinesComponent},
  {path:'newspapers',component:NewspapersComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'adbooks',component:AdBooksComponent},
  {path:'admagazines',component:AdMagazinesComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'books',component:BooksComponent},
  {path:'update-abooks/:id',component:UpdateBooksComponent},
  {path:'update/:name',component:UpdateMagazineComponent},
  {path:'books-details/:id',component:BooksDetailsComponent},
  {path:'add-books',component:AddBooksComponent},
  {path:'add',component:AddMagazineComponent},
  {path:'adnewspapers',component:AdnewspapersComponent},
  {path:'home',component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
