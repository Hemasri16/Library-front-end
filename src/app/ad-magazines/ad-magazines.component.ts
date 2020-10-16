import { Component, OnInit } from '@angular/core';
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
  name='';


  constructor(private magazinesService:MagazinesService, private router :Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.magazines = this.magazinesService.getMagazinesList();
  }

  searchName(): void {
    this.magazinesService.findByName(this.name)
      .subscribe(
        data => {
          this.magazines = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  deleteMagazines(name: string) {
    this.magazinesService.deleteMagazines(name)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
      
      
  updateMagazines(name: string){
    this.router.navigate(['update', name]);
  }
  
  }
  
  
  

