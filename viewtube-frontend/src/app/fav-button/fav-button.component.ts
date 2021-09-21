import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../Services/shared.service';


@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.css']
})
export class FavButtonComponent implements OnInit {
  @Input() thumbnail : any;
  @Input() videoTitle : any;
  @Input() videoId :any;
  @Input() channelTitle : any;
  @Input() isUserProfile : any;
  isFav : boolean = false;
  iconClass : string = "far fa-heart";

  constructor(private shared:SharedService) { }

  addToFav(thumbnail,videoTitle,channelTitle,videoId){

    var isLoggedIn = sessionStorage.getItem("email");
    if(isLoggedIn != null) {
      this.isFav = !this.isFav;
   
      this.isFav ? this.iconClass = "fas fa-heart" : this.iconClass = "far fa-heart"
     
      var videoDetails = { 
        thumbnail: thumbnail, 
        videoTitle: videoTitle,
        channelTitle : channelTitle,
        videoId : videoId 
     }; 
     this.shared.addToFavourite(videoDetails);
      console.log("addint to favlist:",videoDetails);
    }
    else
    {
      return alert("Login first");
    }
  }

  ngOnInit(): void {
  }

}
