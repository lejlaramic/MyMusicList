using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyMusicList.Models;

namespace MyMusicList.DataAccess
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Song> songs { get; set; }
        public DbSet<Category> categories { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Song>(entity=>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("Songs");
                entity.Property(e => e.NameOfSong).HasColumnName("NameOfSong");
                entity.Property(e => e.NameOfSinger).HasColumnName("NameOfSinger");
                entity.Property(e => e.UrlOfSong).HasColumnName("UrlOfSong");
                entity.Property(e => e.SongRating).HasColumnName("SongRating");
                entity.Property(e => e.Favorite).HasColumnName("Favorite");
                entity.Property(e => e.SongEntryDate).HasColumnName("SongEntryDate");
                entity.Property(e => e.SongLastEdit).HasColumnName("SongLastEdit");
            });
            builder.Entity<Category>(entity =>
            {
                entity.HasKey(c => c.CategoryId);
                entity.ToTable("Categories");
                entity.Property(c => c.SongCategory).HasColumnName("SongCategory");

            });
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }
    }
}
