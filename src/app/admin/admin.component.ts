import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  imgUrl="assets/image/pexels-rafael-cosquiere-2041540.jpg";
   admin=new Admin();
   msg='';
  myForm: FormGroup;

  constructor(private _service : AdminService ,private _router: Router) { }

  ngOnInit(): void {

    this.myForm=new FormGroup({
      
      username:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    
  })
}
a

  AdminUser(){
    this._service.AdminUserFromRemote(this.admin).subscribe(
      data=>{console.log("response received");
      this._router.navigate(['/admin-home'])
    },
      error => {console.log("exception occured");
       this.msg="Bad credentials,please enter valid username and password";
    
    }
      
    )

  }
 
  
 }
