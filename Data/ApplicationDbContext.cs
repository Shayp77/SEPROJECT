using Microsoft.EntityFrameworkCore;
using Tix.Models;
namespace Tix.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() { }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Seats> Seats { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<Movie> Movie { get; set; }


    }
}
