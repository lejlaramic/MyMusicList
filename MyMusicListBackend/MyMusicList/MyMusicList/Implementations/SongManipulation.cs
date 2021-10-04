using MyMusicList.DataAccess;
using MyMusicList.Interfaces;
using MyMusicList.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace MyMusicList.Implementations
{
    public class SongManipulation : ISongManipulation
    {
        private readonly ApplicationDbContext context;
        public SongManipulation(ApplicationDbContext context)
        {
            this.context = context;
        }
        public async Task AddSong(Song song)
        {

            var existsSong = await context.songs
                .FirstOrDefaultAsync(c => c.NameOfSong == song.NameOfSong && c.NameOfSinger == song.NameOfSinger);

            if (existsSong != null)
            {
                throw new Exception("Song with same title and same singer already exists!");
            }
            var category = await this.context.categories.SingleAsync(c => c.CategoryId == song.CategoryId);
            if (category == null)
            {
                throw new Exception("Category with that Id does not exist!");
            }
            this.context.songs.Add(song);
            await context.SaveChangesAsync();

        }
        public async Task<List<Song>> GetSongs()
        {
            var listOfSongs = this.context.songs;
            if (listOfSongs == null)
            {
                throw new Exception("There is no songs in database!");

            }
            return await listOfSongs.Include(s => s.Category).ToListAsync();
        }
        public async Task<Song> GetSongById(int id)
        {
            var song = this.context.songs.Include(s => s.Category).FirstOrDefaultAsync(s => s.Id == id);
            if (song == null)
            {
                throw new Exception("There is no song with given id in database!");

            }
            return await song;

        }
        public async Task DeleteSong(int id)
        {
            var song = await this.context.songs.FindAsync(id);
            if (song == null)
            {
                throw new Exception("There is no song with that id in database!");

            }
            this.context.songs.Remove(song);
            await this.context.SaveChangesAsync();
        }
        public async Task UpdateSong(Song newSong, int id)
        {
            var song = await context.songs.FindAsync(id);
            if (song == null)
            {
                throw new Exception("There is no song with that id in database!");

            }
            song.NameOfSong = newSong.NameOfSong;
            song.NameOfSinger = newSong.NameOfSinger;
            song.SongEntryDate = newSong.SongEntryDate;
            song.Favorite = newSong.Favorite;
            song.Category = newSong.Category;
            song.CategoryId = newSong.CategoryId;
            song.SongRating = newSong.SongRating;
            song.UrlOfSong = newSong.UrlOfSong;
            song.SongLastEdit = DateTime.Now;
            await this.context.SaveChangesAsync();
        }
        public async Task<List<Song>> SearchSongs(string search)
        {
            try
            {
            search = search.ToLower();
                if (search.Equals("favorite") || search.Equals("favourite"))
                {
                    return await this.context.songs.Include(m => m.Category).
                        Where(song => song.Favorite.Equals(true)).
                        OrderBy(m => m.Id)
                        .ToListAsync();

                }
                if (search.Equals("non favorite") || search.Equals("non favourite"))
                {
                    return await this.context.songs.Include(m => m.Category).
                        Where(song => song.Favorite.Equals(false)).
                        OrderBy(m => m.Id)
                        .ToListAsync();

                }
                return await this.context.songs.Include(m => m.Category)
                    .Where(song => song.NameOfSong.ToLower().Contains(search) || song.NameOfSinger.ToLower().Contains(search) || song.Category.SongCategory.ToLower().Contains(search)
                    || song.SongRating.ToString().Contains(search))
                    .OrderBy(m => m.Id)
                    .ToListAsync();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);

            }

        }
        
    }
}
