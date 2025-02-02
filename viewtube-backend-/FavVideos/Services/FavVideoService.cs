﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FavVideos.Models;


namespace FavVideos.Services
{
    public class FavVideoService : IFavVideoService
    {
        private readonly IFavVideosRepository repo;

        public FavVideoService(IFavVideosRepository _repo)
        {
            this.repo = _repo;
        }

        public List<FavVideo> GetFavVideoList(int userId)
        {
            var videoList = repo.GetFavVideoList(userId);
            if (videoList != null)
            {
                return videoList;
            }
            return videoList;
        }

        public FavVideo AddFavVideo(FavVideo favVideo)
        {
            FavVideo addFVideo = new FavVideo
            {
                UserId = favVideo.UserId,
                Thumbnail = favVideo.Thumbnail,
                VideoTitle = favVideo.VideoTitle,
                ChannelTitle = favVideo.ChannelTitle,
                VideoId = favVideo.VideoId
            };
            repo.AddFavVideo(addFVideo);
            return addFVideo;
        }

        public FavVideo DeleteFavVideo(FavVideo favVideo)
        {
            FavVideo delFVideo = new FavVideo
            {
                UserId = favVideo.UserId,
                Thumbnail = favVideo.Thumbnail,
                VideoTitle = favVideo.VideoTitle,
                ChannelTitle = favVideo.ChannelTitle,
                VideoId = favVideo.VideoId
            };
            repo.DeleteFavVideo(delFVideo);
            return delFVideo;
        }

    }
}
