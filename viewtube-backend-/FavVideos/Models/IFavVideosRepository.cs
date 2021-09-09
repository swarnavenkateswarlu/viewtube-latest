using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FavVideos.Models
{
    public interface IFavVideosRepository
    {
        FavVideo AddFavVideo(FavVideo favVideo);
        FavVideo DeleteFavVideo(FavVideo favVideo);

        List<FavVideo> GetFavVideoList(int userId);

        // FavVideo GetFavVideo(FavVideo favVideo);
    }
}
