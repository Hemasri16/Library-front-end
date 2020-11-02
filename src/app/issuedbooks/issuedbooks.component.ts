import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Books } from '../books';
import { BooksService } from '../books.service';
import { Issuebook } from '../issuebook';
import { IssuebookService } from '../issuebook.service';

@Component({
  selector: 'app-issuedbooks',
  templateUrl: './issuedbooks.component.html',
  styleUrls: ['./issuedbooks.component.css']
})
export class IssuedbooksComponent implements OnInit {

  issued_books: Observable<Issuebook[]>;

  constructor(private issuedbookService: IssuebookService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.issued_books = this.issuedbookService.getIssued_BookList();
  }
} 
  

