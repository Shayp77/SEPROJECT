using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CineMajesty.Models
{
	public class Seat
	{
		[Required]
		[Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Seats_ID { get; set; }

		[Required]
		public int Seat_Number { get;  set; }

		[Required]
		public bool Seat_IsAvailable { get; set; }

		[Required]
		[ForeignKey("Ticket")]
		public int Ticket_ID { get; set; }
        public virtual Ticket Ticket { get; set; }

		[Required]
		[ForeignKey("Room")]
		public int Room_ID { get; set; }
        public virtual Room Room { get; set; }
    }
}

