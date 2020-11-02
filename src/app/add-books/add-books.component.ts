import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abooks } from '../abooks';
import { AdBooksService } from '../abooks.service';
import { Books } from '../books';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  books:Books=new Books();
  submitted=false;

  constructor(private adbooksService:AdBooksService,
    private router:Router) { }

  ngOnInit() {
  }

  newBooks():void{
    this.submitted=false;
    this.books=new Books();
  }

  save() {
    this.adbooksService
    .createBooks(this.books).subscribe(data => {
      console.log(data)
      this.books = new Books();
      this.gotoList();
    }, 
    error => console.log(error));
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/adbooks']);
  }
}

