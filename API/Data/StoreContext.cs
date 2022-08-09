using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }
        // On enregistre Product dans DbSet (collection) qui s'appellera "Products"
        public DbSet<Product> Products { get; set; }
    }
}