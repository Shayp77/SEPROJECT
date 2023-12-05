using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using CineMajesty.Models;
using CineMajesty.Data;

namespace CineMajesty.Controllers
{
    [ApiController]
    [Route("api/movies")]
    public class MovieController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MovieController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetMovies()
        {
            var movies = _context.Movie.ToList();
            return Ok(movies);
        }

        //[HttpGet("{id}")]
        //public IActionResult GetMovieById(int id)
        //{
        //    var movie = _context.Movie.FirstOrDefault(m => m.Movie_ID == id);

        //    if (movie == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(movie);
        //}
    }
}
