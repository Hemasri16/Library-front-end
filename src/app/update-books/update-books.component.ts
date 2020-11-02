import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abooks } from '../abooks';
import { AdBooksService } from '../abooks.service';
import { Books } from '../books';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {

  id:number;
  books:Books;
  submitted=false;

  constructor(private route:ActivatedRoute,private router:Router,
    private adbooksService:AdBooksService) { }

  ngOnInit()  {
    this.books=new Books();

    this.id=this.route.snapshot.params['id'];
    this.adbooksService.getBooks(this.id)
    .subscribe(data => {
      console.log(data)
      this.books = data;
    }, error => console.log(error));
}

updateBooks() {
  this.adbooksService.updateBooks(this.id, this.books)
    .subscribe(data => {
      console.log(data);
      this.books = new Books();
      this.gotoList();
    }, error => console.log(error));
    alert ("Updated Successfully")
}



onSubmit() {
  this.updateBooks();
  this.submitted=true;
  
}

gotoList() {
  this.router.navigate(['/adbooks']);
}
}

