﻿// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Google.Apis.Services;
// using Google.Apis.YouTube.v3;

// namespace VideoDetails
// {
//     class Program
//     {
//         static async Task Main(string[] args)
//         {
//             Console.WriteLine("Youtube video details");

//             var service = new YouTubeService(new BaseClientService.Initializer()
//             {
//                 ApiKey = "AIzaSyB2xtEZ1PWhmbPAPbyC6LtapaubOGdWhcI"
//             });

//              var searchRequest = service.Videos.List("snippet");
//             searchRequest.Id = "CzvQxQYKO88";

//             var searchResponse = await searchRequest.ExecuteAsync();
//             var youTubeVideo = searchResponse.Items.FirstOrDefault();
//             if (youTubeVideo != null)
//             {
//                 YouTubeVideoDetails videoDetails = new YouTubeVideoDetails()
//                 {
//                     VideoId = youTubeVideo.Id,
//                     Description = youTubeVideo.Snippet.Description,
//                     Title = youTubeVideo.Snippet.Title,
//                     ChannelTitle = youTubeVideo.Snippet.ChannelTitle,
//                     PublicationDate = youTubeVideo.Snippet.PublishedAt
//                 };

//                 Console.WriteLine(videoDetails.Description);
//             }
//         }

//     }

//     public class YouTubeVideoDetails
//     {
//         public string VideoId { get; set; }
//         public string Description { get; set; }
//         public string Title { get; set; }
//         public string ChannelTitle { get; set; }
//         public DateTime? PublicationDate { get; set; }
//     }
// }


