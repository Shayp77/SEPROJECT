using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CineMajesty.Models
{
	public class Booking
	{
        [Required]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Booking_ID { get; set; }

        //[Required]
        //public Date Booking_Date { get; set; }

        [Required]
        public int Booking_Quantity { get; set; }

        [Required]
        public string Booking_Movie_ID { get; set; }

        [Required]
        [ForeignKey("Customer")]
        public int Customer_ID { get; set; }
        public Customer Customer { get; set; }

        public ICollection<Ticket> Tickets { get; set; }
    }
}

