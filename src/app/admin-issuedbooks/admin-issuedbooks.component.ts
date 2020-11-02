import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Issuebook } from '../issuebook';
import { IssuebookService } from '../issuebook.service';

@Component({
  selector: 'app-admin-issuedbooks',
  templateUrl: './admin-issuedbooks.component.html',
  styleUrls: ['./admin-issuedbooks.component.css']
})
export class AdminIssuedbooksComponent implements OnInit {
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