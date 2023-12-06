using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CineMajesty.Models;

namespace CineMajesty.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Booking> Booking { get; set; }
        public DbSet<Movie> Movie { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<Seat> Seat { get; set; }
        public DbSet<Ticket> Ticket { get; set; }
    }
}