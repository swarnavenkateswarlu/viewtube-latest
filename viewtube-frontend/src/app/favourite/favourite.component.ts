import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MiddleService } from '../middle.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  
  userFavourites:any;
  favChannelList:any;
  constructor( private mservice:MiddleService,private router:Router,private share:SharedService) { }

  ngOnInit(): void {
    this.userFavourites=this.share.favVideoList
    console.log(this.userFavourites)
    // console.log(this.mservice.getFav());
    // this.favChannelList=this.mservice.getFav();
    // console.log(this.favChannelList)
  }
  // getFavourites(){
  //   this.userFavourites=this.share.getFavourites()
   // console.log(this.userFavourites)
  // }
  getHome(){
    this.router.navigate(['home'])
  }

}
