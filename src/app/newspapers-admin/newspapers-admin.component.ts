import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Newspaper } from '../newspaper';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-newspapers-admin',
  templateUrl: './newspapers-admin.component.html',
  styleUrls: ['./newspapers-admin.component.css']
})
export class NewspapersAdminComponent implements OnInit {

  newspaper:Observable<Newspaper[]>;
  dtOptions: DataTables.Settings = {};
  @ViewChild('dtOptions', {static: true}) table;
  MagazinesService: any;
  NewspaperService: any;
  

  constructor(private newspaperService:NewspaperService, private router :Router) { 
    
      setTimeout(function(){
        $(function(){
          $('#example').DataTable();
      });
      },2000);
      
    
  }

  ngOnInit() {
    
    this.newspaper = this.newspaperService.getNewspaperList();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
  }

  deleteNewspaper(name: string) {
    this.newspaperService.deleteNewspaper(name)
      .subscribe(
        data => {
          console.log(data);
          this.newspaper=this.NewspaperService.getNewspaper();
        },
        error => console.log(error));
        alert ("Delete")
      }
      
  updateNewspaper(name: string){
    this.router.navigate(['update-newspaper', name]);
  }
  
  }
  