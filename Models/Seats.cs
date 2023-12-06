using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Tix.Models
{
    public class Seats
    {
        [Key]
        public int Seat_ID { get; set; }
        public int Ticket_ID { get; set; }
        public int Room_ID { get; set; }
        [ForeignKey("Room_ID")]
        public Room Room { get; set; }
        public int Seat_Number { get; set; }
        public bool Seat_IsAvailable { get; set; }
    }
}
