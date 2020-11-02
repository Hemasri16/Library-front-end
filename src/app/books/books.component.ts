import { Component, OnInit, ViewChild } from '@angular/core';
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
  dtOptions: DataTables.Settings = {};
  @ViewChild('dtOptions', {static: true}) table;

  constructor(private booksService:BooksService, private router :Router) {
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
   }

  ngOnInit() {

    this.books = this.booksService.getBooksList();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }
  
  
  booksDetails(id: number){
    this.router.navigate(['books-details', id]);
  }

  takeBooks(id: number){
    this.router.navigate(['take-abooks', id]);
  }
}
  
  
  

