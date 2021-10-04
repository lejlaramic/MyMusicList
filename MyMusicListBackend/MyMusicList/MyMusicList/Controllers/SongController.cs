using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyMusicList.Interfaces;
using MyMusicList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMusicList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongController : ControllerBase
    {
        private readonly ISongManipulation songManipulation;


        private readonly ILogger<SongController> _logger;

        public SongController(ILogger<SongController> logger, ISongManipulation songManipulation)
        {
            _logger = logger;
            this.songManipulation = songManipulation;
        }
        [HttpPost("addSong")]
        public async Task<IActionResult> AddSong(Song model)
        {
            try
            {
                await this.songManipulation.AddSong(model);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            return Ok(new
            {
                StatusCode = 200,
                message = "Song successfully added!",
            });
        }
        [HttpGet("getSongs")]
        public async Task<List<Song>> GetSongs()
        {
           
            return await this.songManipulation.GetSongs();
        }
        [HttpGet("songById/{id}")]
        public async Task<Song> GetSongById(int id)
        {

            return await this.songManipulation.GetSongById(id);
        }
        [HttpDelete("deleteSong/{id}")]
        public async Task<IActionResult> DeleteSong(int id)
        {
            try
            {
                await this.songManipulation.DeleteSong(id);
            }
            catch
            {
                return BadRequest();
            }

            return Ok(new
            {
                StatusCode = 200,
                message = "Successfully deleted!",
            });
        }
     
        [HttpPut("updateSong/{id}")]
        public async Task<IActionResult> UpdateSong([FromBody] Song newSong, int id)
        {
            try
            {
                await this.songManipulation.UpdateSong(newSong, id);
            }
            catch
            {
                return BadRequest();
            }

            return Ok(new
            {
                StatusCode = 200,
                message = "Successfully updated !",
            }) ;
        }
        
         [HttpGet("searchSongs")]
         public Task<List<Song>> Search([FromQuery] string search)
          {
              try
              {

                  return songManipulation.SearchSongs(search);
              }
              catch (Exception e)
              {
                  throw new Exception(e.Message);
              }
          }
    }
}
