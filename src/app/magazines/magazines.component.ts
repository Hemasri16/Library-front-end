import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Magazines } from '../magazines';
import { MagazinesService } from '../magazines.service';

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.css']
})
export class MagazinesComponent implements OnInit {

  magazines:Observable<Magazines[]>;
  dtOptions: DataTables.Settings = {};
  @ViewChild('dtOptions', {static: true}) table;

  constructor(private magazinesService:MagazinesService, private router :Router) {
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
   }

  ngOnInit() {

    this.magazines = this.magazinesService.getMagazinesList();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }
  
  
}
  
  
  
