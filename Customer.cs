using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CineMajesty.Models
{
	public class Customer
	{
		[Required]
		[Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Customer_ID { get; set; }

		[Required]
		public string Customer_Name { get; set; }

		[Required]
		public string Customer_Email { get; set; }

		[Required]
		public string Customer_Password { get; set; }

		[Required]
		public double Customer_Balance { get; set; }

        public ICollection<Booking> Bookings { get; set; }
    }
}

