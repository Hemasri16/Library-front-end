import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-registeredusers',
  templateUrl: './view-registeredusers.component.html',
  styleUrls: ['./view-registeredusers.component.css']
})
export class ViewRegisteredusersComponent implements OnInit {
  user:Observable<User[]>;
  dtOptions: DataTables.Settings = {};
  @ViewChild('dtOptions', {static: true}) table;

  constructor(private userService:UserService, private router :Router) {
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
   }

  ngOnInit() {

    this.user= this.userService.getUserList();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }
  
  
}