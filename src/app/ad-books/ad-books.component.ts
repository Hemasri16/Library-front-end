import { Component, OnInit } from '@angular/core';
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

  constructor(private adbooksService:AdBooksService, private router :Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.books = this.adbooksService.getBooksList();
  }

  deleteBooks(id: number) {
    this.adbooksService.deleteBooks(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
      
  updateBooks(id: number){
    this.router.navigate(['update-abooks', id]);
  }
  
  }
  
  
  

