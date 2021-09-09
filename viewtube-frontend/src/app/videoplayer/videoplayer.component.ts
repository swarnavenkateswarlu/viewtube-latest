import { Component, OnInit , Input} from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { SharedService } from '../Services/shared.service';


@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
 // @Input() videoId : any;

   videoId:any;
  constructor( private shared:SharedService) { }

  ngOnInit(): void {
    this.videoId = this.shared.getVideoId();
    console.log(this.videoId);
      
  } 

}
