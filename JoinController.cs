using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using CineMajesty.Models;
using CineMajesty.Data;

namespace CineMajesty.Controllers
{
	[ApiController]
	[Route("api/join")]
	public class JoinController : ControllerBase
	{
        private readonly ApplicationDbContext _context;

        public JoinController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetBookings()
        {
            var bookings = _context.Booking.Include(b => b.Customer).Include(b => b.Tickets).ThenInclude(t => t.Seats)
                .ToList();
            return Ok(bookings);
        }
    }
}

