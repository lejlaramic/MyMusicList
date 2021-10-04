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
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryManipulation categoryManipulation;


        private readonly ILogger<CategoryController> _logger;

        public CategoryController(ILogger<CategoryController> logger, ICategoryManipulation categoryManipulation)
        {
            _logger = logger;
            this.categoryManipulation = categoryManipulation;
        }
        [HttpPost("addCategory")]
        public async Task<IActionResult> AddCategory(Category model)
        {
            try
            {
                await this.categoryManipulation.AddCategory(model);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            return Ok(new
            {
                StatusCode = 200,
                message = "Category successfully added!",
            });
        }
        [HttpGet("getCategories")]
        public async Task<List<Category>> GetCategories()
        {
            return await this.categoryManipulation.getCategories();

        }
        [HttpGet("categoryById/{id}")]
        public async Task<Category> GetCategoryById(int id)
        {

            return await this.categoryManipulation.GetCategoryById(id);
        }
        [HttpGet("categoryByName/{name}")]
        public async Task<Category> GetCategoryByName(string name)
        {

            return await this.categoryManipulation.GetCategoryByName(name);
        }
    }
}
