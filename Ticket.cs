using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CineMajesty.Models
{
	public class Ticket
	{
		[Required]
		[Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Ticket_ID { get; set; }

		[Required]
		public int Ticket_Number { get; set; }

		[Required]
		[ForeignKey("Booking")]
		public int Booking_ID { get; set; }
		public virtual Booking Booking { get; set; }

        public ICollection<Seat> Seats { get; set; }
    }
}

