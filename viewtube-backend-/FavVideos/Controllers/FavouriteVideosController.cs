using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FavVideos.Models;

namespace FavVideos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavouriteVideosController : ControllerBase
    {
        //private readonly IFavVideosRepository repo;
        private readonly FavVideosContext repo;
        public FavouriteVideosController(FavVideosContext _repo)
        {
            this.repo = _repo;
        }

        [HttpGet]
        public List<FavVideo> GetVideosList(int userId)
        {
            var favVideoList = repo.FavVideos.Where(v => v.UserId == userId).ToList();
            return favVideoList;
        }

        [HttpPost("delete")]
        public FavVideo DeleteVideo(FavVideo favVideo)
        {
            repo.FavVideos.Add(favVideo);
            repo.SaveChanges();
            return favVideo;
        }

        [HttpPost("add")]
        public FavVideo AddVideo(FavVideo favVideo)
        {
            repo.FavVideos.Remove(favVideo);
            repo.SaveChanges();
            return favVideo;
        }

    }
}
