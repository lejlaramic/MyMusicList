// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyMusicList.DataAccess;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MyMusicList.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20210929221121_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("MyMusicList.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("SongCategory")
                        .IsRequired()
                        .HasColumnName("SongCategory")
                        .HasColumnType("text");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("MyMusicList.Models.Song", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("CategoryId")
                        .HasColumnType("integer");

                    b.Property<bool>("Favorite")
                        .HasColumnName("Favorite")
                        .HasColumnType("boolean");

                    b.Property<string>("NameOfSinger")
                        .IsRequired()
                        .HasColumnName("NameOfSinger")
                        .HasColumnType("text");

                    b.Property<string>("NameOfSong")
                        .IsRequired()
                        .HasColumnName("NameOfSong")
                        .HasColumnType("text");

                    b.Property<DateTime>("SongEntryDate")
                        .HasColumnName("SongEntryDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("SongLastEdit")
                        .HasColumnName("SongLastEdit")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("SongRating")
                        .HasColumnName("SongRating")
                        .HasColumnType("integer");

                    b.Property<string>("UrlOfSong")
                        .IsRequired()
                        .HasColumnName("UrlOfSong")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Songs");
                });

            modelBuilder.Entity("MyMusicList.Models.Song", b =>
                {
                    b.HasOne("MyMusicList.Models.Category", "Category")
                        .WithMany("Songs")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
