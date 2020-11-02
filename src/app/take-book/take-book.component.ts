import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../author';

import { Issuebook } from '../issuebook';
import { IssuebookService } from '../issuebook.service';

@Component({
  selector: 'app-take-book',
  templateUrl: './take-book.component.html',
  styleUrls: ['./take-book.component.css']
})
export class TakeBookComponent implements OnInit {
  authors: Author[] = [
    { id: 1, name: 'Pal' },
    { id: 2, name: 'John' },
    
  ];
  
  issued_book:Issuebook=new Issuebook();
  submitted=false;
  http: any;
  //book_numbers:number[]=[1101,1201,1301,1343,1345];
  //book_titles: string[] = ['Life of Pi', 'King', 'Queen'];
  

  constructor(private issuebookService:IssuebookService,
    private router:Router) { }

  ngOnInit() {
  }

  newIssued_book():void{
    this.submitted=false;
    this.issued_book=new Issuebook();
  }

  save() {
    this.issuebookService
    .createIssued_Book(this.issued_book).subscribe(data => {
      console.log(data)
      this.issued_book= new Issuebook();
      this.gotoList();
    }, 
    error => console.log(error));
    alert("Book Issued Successfully")
  }


  
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/issued-books']);
  }

  getAuthorList(): Observable<any> {
    return this.http.get(`http://localhost:8080/library-rest/api/author`);
  }
}


