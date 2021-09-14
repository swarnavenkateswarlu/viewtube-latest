import { ApiServiceService } from './../api-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit {
  @Input() thumbnail : any;
  @Input() videoTitle : any;
  @Input() videoId :any;
  @Input() channelTitle : any;
  @Input() isUserProfile : any;
  isFav : boolean = false;
  iconClass : string = "far fa-heart";
  
  

  constructor(private router:Router,private shared:SharedService) { }

  handleCick(){
    
    let vid = this.videoId;
    this.shared.setVideoId(vid)
    this.router.navigate(['videoplayer'])
   
  }
  addToFav(thumbnail,videoTitle,channelTitle,videoId){

    var isLoggedIn = sessionStorage.getItem("email");
    if(isLoggedIn != null) {
      console.log(isLoggedIn);
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
