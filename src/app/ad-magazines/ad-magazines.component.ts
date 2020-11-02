import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Magazines } from '../magazines';
import { MagazinesService } from '../magazines.service';

@Component({
  selector: 'app-ad-magazines',
  templateUrl: './ad-magazines.component.html',
  styleUrls: ['./ad-magazines.component.css']
})
export class AdMagazinesComponent implements OnInit {

  magazines:Observable<Magazines[]>;
  dtOptions: DataTables.Settings = {};
  @ViewChild('dtOptions', {static: true}) table;
  MagazinesService: any;
  

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

  deleteMagazines(name: string) {
    this.magazinesService.deleteMagazines(name)
      .subscribe(
        data => {
          console.log(data);
          this.magazines=this.MagazinesService.getMagazines();
        },
        error => console.log(error));
        alert ("Delete")
      }
      
  updateMagazines(name: string){
    this.router.navigate(['update', name]);
  }
  
  }
  
  
  