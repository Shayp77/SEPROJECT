using Microsoft.AspNetCore.Mvc;
using Tix.Models;
using Tix.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Tix.Controllers
{

    [ApiController]
    [Route("api/info")]
    public class InfoSeats : Controller
    {
        private readonly ApplicationDbContext _context;
        public InfoSeats(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{roomID}")]
        public List<Room> GetSeatCapacity(int roomID)
        {
            var room =  _context.Room.Where(x=> x.Room_ID == roomID).
                Select(x=> new Room{
                Room_ID = x.Room_ID,
                Room_SeatCapacity = x.Room_SeatCapacity,
            });

           
            return room.ToList();
        }


        [HttpGet("rooms/{movieID}/{roomType}")]
        public IActionResult GetRoomsForMovieAndType(string movieID, string roomType)
        {
            try
            {
                var rooms = _context.Room
                    .Where(r => r.Movie_ID == movieID && r.Room_Type == roomType)
                    .Select(r => new
                    {
                        r.Room_ID,
                        r.Room_Name,
                        r.Room_Type,
                        r.Room_SeatCapacity
                    })
                    .ToList();

                return Ok(rooms);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }



    }
}
