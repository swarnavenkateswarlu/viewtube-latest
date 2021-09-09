using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace FavVideos.Models
{
    public class FavVideosRepository
    {
        private readonly FavVideosContext _context;
        public FavVideosRepository(FavVideosContext context)
        {
            _context = context;
        }

        public List<FavVideo> GetFavVideoList(int userId)
        {
            var favVideoList = _context.FavVideos.Where(v => v.UserId == userId).ToList();
            return favVideoList;
        }
        public FavVideo AddFavVideo(FavVideo favVideo)
        {
            _context.FavVideos.Add(favVideo);
            _context.SaveChanges();
            return favVideo;
        }

        public FavVideo DeleteFavVideo(FavVideo favVideo)
        {
            _context.FavVideos.Remove(favVideo);
            _context.SaveChanges();
            return favVideo;
        }


    }
}
