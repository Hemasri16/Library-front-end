import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { User } from '../user';
import {UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imgUrl="assets/image/pexels-rafael-cosquiere-2041540.jpg";
   user=new User();
   msg='';
  myForm: FormGroup;

  constructor(private _service : UserService ,private _router: Router) { }

  ngOnInit(): void {

    this.myForm=new FormGroup({
      
      username:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    
  })
}


  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{console.log("response received");
      this._router.navigate(['/home'])
    },
      error => {console.log("exception occured");
       this.msg="Bad credentials,please enter valid username and password";
    
    }
      
    )

  }
 gotoregistration(){
  this._router.navigate(['/registration'])
  
 }
}