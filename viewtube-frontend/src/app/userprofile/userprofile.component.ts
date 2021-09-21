import { AuthServiceService } from './../Services/auth-service.service';
import { ApiServiceService } from './../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiddleService } from '../middle.service';
import { SharedService } from '../Services/shared.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
//import { loginUser } from '../Models/loginUser';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

   
   //userdetails:User[];
  //user:any=new loginUser();
  constructor( private router:Router,private authService: AuthServiceService,private mservice:MiddleService,private share:SharedService) { }
 
   userDetails : any;

   

  ngOnInit(): void {
   // this.user=this.mservice.user;
     this.authService.getUser().subscribe((res) => {
      console.log(res)
      this.userDetails=res;
    });
    // this.userDetails=this.authService.singleUserDetails
     //console.log(this.userDetails)
  // this.userdetails=this.mservice.users
 //  console.log(this.userdetails)
  }
  // getUserDetails(){this.authService.getUser().subscribe((res) => {
  //   console.log(res)
  //   this.userDetails=res;});
  //   console.log(this.userDetails)
  // }
  getFavourites(){
    this.router.navigate(['fav'])
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login'])
  }
  getHome(){
    this.router.navigate(['home'])
  }

}
