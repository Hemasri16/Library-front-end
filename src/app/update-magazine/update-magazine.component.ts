import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Magazines } from '../magazines';
import { MagazinesService } from '../magazines.service';

@Component({
  selector: 'app-update-magazine',
  templateUrl: './update-magazine.component.html',
  styleUrls: ['./update-magazine.component.css']
})
export class UpdateMagazineComponent implements OnInit {

  name:string;
  magazines:Magazines;
  submitted=false;

  constructor(private route:ActivatedRoute,private router:Router,
    private magazinesService:MagazinesService) { }

  ngOnInit()  {
    this.magazines=new Magazines();

    this.name=this.route.snapshot.params['name'];
    this.magazinesService.getMagazines(this.name)
    .subscribe(data => {
      console.log(data)
      this.magazines = data;
    }, error => console.log(error));
}
updateMagazines() {
  this.magazinesService.updateMagazines(this.name, this.magazines)
    .subscribe(data => {
      console.log(data);
      this.magazines = new Magazines();
      this.gotoList();
    }, error => console.log(error));
    alert("Updated Successfully");
}



onSubmit() {
  this.updateMagazines();
  this.submitted=true;
}

gotoList() {
  this.router.navigate(['/admagazines']);
}
}


