using MyMusicList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMusicList.Interfaces
{
    public interface ISongManipulation
    {
        Task AddSong(Song song);
        Task<List<Song>> GetSongs();
        Task<Song> GetSongById(int id);
        Task DeleteSong(int id);
        Task UpdateSong(Song newSong, int id);
        Task<List<Song>> SearchSongs(string search);
    }
}
