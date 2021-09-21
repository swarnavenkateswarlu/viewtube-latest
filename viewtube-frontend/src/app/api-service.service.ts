import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  cat:any
   public videoID:any;
  API_KEY1="AIzaSyCw7Rg_GfOgcI7bLN72egerSV8AJDxkyHI"

  constructor(private httpservice:HttpClient) { }
 getPopularVideos():Observable<any>{
   const API_KEY="AIzaSyCw7Rg_GfOgcI7bLN72egerSV8AJDxkyHI"
   const url="https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=9&key="+API_KEY
 return this.httpservice.get<any>(url);
  }
  searchVideosService(text){
    const url="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q="+text+"&key="+this.API_KEY1+""
  return this.httpservice.get<any>(url);
  }
 // catUrl="https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=in&key="+this.API_KEY1+""
 
  
  categoryChannels(cID){
    const API_KEY="AIzaSyCw7Rg_GfOgcI7bLN72egerSV8AJDxkyHI"
    const url="https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=in&maxResults=9&videoCategoryId="+cID+"&chart=mostPopular&key="+API_KEY+""
    return this.httpservice.get<any>(url);
  }
}



