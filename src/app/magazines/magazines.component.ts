import { Component, OnInit } from '@angular/core';
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

  constructor(private magazinesService:MagazinesService, private router :Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.magazines = this.magazinesService.getMagazinesList();
  }
  
  
  magazinesDetails(id: number){
    this.router.navigate(['magazines-details', id]);
  }
  }
  
  