import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiddleService } from '../middle.service';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from '../Services/auth-service.service';
import { LoginUser } from '../Models/loginUser';
import { RegisterUser } from '../Models/registerUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faVideo = faVideo;

  //user:User=new LoginUser()
  name: string;
  email: string;
  password: string;
  confirmPassword : string;

  //users:User[];
  constructor(
    private router: Router,
    private mservice: MiddleService,
    private authsvc: AuthServiceService
  ) {}

  isRegister: boolean = false;

  userCredentials: [];

  loginOrRegister(form: any) {
    if (!this.isRegister) {
      console.log('In login');
      console.log(`${this.email}, ${this.password}`);
      let user = new LoginUser(this.email, this.password);
      this.authsvc.loginAuthenticate(user).subscribe(
        (res: any) => {
          console.log(res['token']);
          sessionStorage.setItem('token', res['token']);
          sessionStorage.setItem('email', this.email);
          this.router.navigate(['home']);
        },
        (error: any) => {
          alert(`${error.error}. Check Credentials!`)
        }
      );
      
    } else {
      console.log('In Registration');
      console.log(`${this.name},${this.email}, ${this.password}`);
      console.log(`${this.confirmPassword}`)
      if(this.confirmPassword == this.password){
        let user = new RegisterUser(this.name, this.email, this.password);
      this.authsvc.registerUser(user).subscribe(
        (res: any) => {
          alert('User has been registered. Login now');
          this.router.navigate(['login']);
        },
        (error: any) => {
          //alert(error);
          //console.log(error.error)
          alert(error.error)
        }
      );
      }else{
        alert("Password and Confirm password does not match")
      }
      
     
    }
  }
  register() {
    this.isRegister = !this.isRegister;
    //this.router.navigate(['registration'])
  }
  ngOnInit(): void {}

  }
