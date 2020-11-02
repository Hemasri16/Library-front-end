import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Abooks } from '../abooks';
import { AdBooksService } from '../abooks.service';
import { Books } from '../books';


@Component({
  selector: 'app-ad-books',
  templateUrl: './ad-books.component.html',
  styleUrls: ['./ad-books.component.css']
})
export class AdBooksComponent implements OnInit {

  books:Observable<Books[]>;
  dtOptions: DataTables.Settings = {};
  @ViewChild('dtOptions', {static: true}) table;
  AdBooksService: any;

  constructor(private abooksService:AdBooksService, private router :Router) { 
    
      setTimeout(function(){
        $(function(){
          $('#example').DataTable();
      });
      },2000);
      
    
  }

  ngOnInit() {
    
    this.books = this.abooksService.getBooksList();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
  }

  deleteBooks(id: number) {
    this.abooksService.deleteBooks(id)
      .subscribe(
        data => {
          console.log(data);
          this.books=this.AdBooksService.getBooks();
        },
        error => console.log(error));
        alert ("Delete")
      }
      
  updateBooks(id: number){
    this.router.navigate(['update-abooks', id]);
  }
  
  }
  
  
  

