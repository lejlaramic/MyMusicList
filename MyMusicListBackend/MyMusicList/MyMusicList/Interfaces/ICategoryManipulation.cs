using MyMusicList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMusicList.Interfaces
{
    public interface ICategoryManipulation
    {
        Task AddCategory(Category category);
        Task<List<Category>> getCategories();
        Task<Category> GetCategoryById(int id);
        Task<Category> GetCategoryByName(string name);


    }
}
