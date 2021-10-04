using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyMusicList.Models
{
    public class Song
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string NameOfSong { get; set; }
        [Required]
        public string NameOfSinger { get; set; }
        [Required]
        [Url]
        public string UrlOfSong { get; set; }
        [Required]
        [Range(1, 5)]
        public int SongRating { get; set; }
        [Required]
        public bool Favorite { get; set; }
        [Required]
        public DateTime SongEntryDate { get; set; }
        public DateTime SongLastEdit { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
    }
}
