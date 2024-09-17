using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }

        public static implicit operator ControllerContext(StoreContext v)
        {
            throw new NotImplementedException();
        }
    }
}