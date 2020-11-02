import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

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

import { TakeBookComponent } from './take-book/take-book.component';
import { IssuedbooksComponent } from './issuedbooks/issuedbooks.component';
import { NewspapersAdminComponent } from './newspapers-admin/newspapers-admin.component';
import { AddNewspaperComponent } from './add-newspaper/add-newspaper.component';
import { UpdateNewspaperComponent } from './update-newspaper/update-newspaper.component';

import { ViewRegisteredusersComponent } from './view-registeredusers/view-registeredusers.component'
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminIssuedbooksComponent } from './admin-issuedbooks/admin-issuedbooks.component';






const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  
  {path:'view',component:ViewRegisteredusersComponent},
  {path:'magazines',component:MagazinesComponent},
  {path:'newspapers',component:NewspapersComponent},
  
  {path:'admin-home',component:AdminHomeComponent},
  {path:'adbooks',component:AdBooksComponent},
  {path:'admagazines',component:AdMagazinesComponent},
  {path:'adnewspapers',component:NewspapersAdminComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'books',component:BooksComponent},
  {path:'update-abooks/:id',component:UpdateBooksComponent},
  {path:'update/:name',component:UpdateMagazineComponent},
  {path:'update-newspaper/:name',component:UpdateNewspaperComponent},
  {path:'books-details/:id',component:BooksDetailsComponent},
  {path:'add-books',component:AddBooksComponent},
  {path:'add-newspaper',component:AddNewspaperComponent},
  {path:'add',component:AddMagazineComponent},
  {path:'admin-issuedbooks',component:AdminIssuedbooksComponent},
  {path:'home',component:HomeComponent},
  {path:'take-abooks',component:TakeBookComponent},
  {path:'issued-books',component:IssuedbooksComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
