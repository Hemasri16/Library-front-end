import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
a

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{console.log("response received");
      this._router.navigate(['/admin-home'])
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