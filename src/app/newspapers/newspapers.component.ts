import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Newspaper } from '../newspaper';

import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-newspapers',
  templateUrl: './newspapers.component.html',
  styleUrls: ['./newspapers.component.css']
})
export class NewspapersComponent implements OnInit {

  newspaper:Observable<Newspaper[]>;
  dtOptions: DataTables.Settings = {};
  @ViewChild('dtOptions', {static: true}) table;

  constructor(private newspaperService:NewspaperService, private router :Router) {
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
   }

  ngOnInit() {

    this.newspaper= this.newspaperService.getNewspaperList();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }
  
  
}