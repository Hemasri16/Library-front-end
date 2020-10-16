import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Magazines } from '../magazines';
import { MagazinesService } from '../magazines.service';

@Component({
  selector: 'app-add-magazine',
  templateUrl: './add-magazine.component.html',
  styleUrls: ['./add-magazine.component.css']
})
export class AddMagazineComponent implements OnInit {

  magazines:Magazines=new Magazines();
  submitted=false;

  constructor(private magazinesService:MagazinesService,
    private router:Router) { }

  ngOnInit() {
  }

  newMagazines():void{
    this.submitted=false;
    this.magazines=new Magazines();
  }

  save() {
    this.magazinesService
    .createMagazines(this.magazines).subscribe(data => {
      console.log(data)
      this.magazines = new Magazines();
      this.gotoList();
    }, 
    error => console.log(error));
  }


  
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/admagazines']);
  }
}


