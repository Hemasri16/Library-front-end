import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user';
import {Router} from '@angular/router';
import {UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user=new User();
  msg='';


  constructor(private _service : UserService ,private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{console.log("response received");
      this.msg="Registration Successful";
      this._router.navigate(['/login'])
    },
      error => {console.log("exception occured");
       this.msg=error.error();
       ;
    
    }
      
    )

  }

  gotologin(){
    this._router.navigate(['/login'])
}
}