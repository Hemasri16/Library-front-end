import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { BooksService } from "../books.service";
import { Books } from "../books";

import { Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Observable<Books[]>;

  constructor(private booksService:BooksService, private router :Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.books = this.booksService.getBooksList();
  }
  
  
  booksDetails(id: number){
    this.router.navigate(['books-details', id]);
  }
  }
  
  
  

