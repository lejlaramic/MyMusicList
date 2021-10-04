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
    public class CategoryManipulation: ICategoryManipulation
    {
        private readonly ApplicationDbContext context;
        public CategoryManipulation(ApplicationDbContext context)
        {
            this.context = context;
        }
        public async Task AddCategory(Category category)
        {

            var existsCategory = await context.categories
                .FirstOrDefaultAsync(c => c.SongCategory == category.SongCategory);

            if (existsCategory != null)
            {
                throw new Exception("Category already exists!");
            }

            context.categories.Add(category);
            await context.SaveChangesAsync();

        }
        public async Task<List<Category>> getCategories()
        {
            var listCategories = context.categories;
            if (listCategories == null)
            {
                throw new Exception("There is no categories in database!");
            }
            return await listCategories.Include(s => s.Songs).ToListAsync();

        }
        public async Task<Category> GetCategoryById(int id)
        {
            var category = this.context.categories.Include(s => s.Songs).FirstOrDefaultAsync(s=>s.CategoryId==id);
            if (category == null)
            {
                throw new Exception("There is no song with given id in database!");

            }
            return await category;

        }
        public async Task<Category> GetCategoryByName(string name)
        {
            var category = this.context.categories.Include(s => s.Songs).FirstOrDefaultAsync(s => s.SongCategory == name);
            if (category == null)
            {
                throw new Exception("There is no song with given id in database!");

            }
            return await category;

        }
    }
}
