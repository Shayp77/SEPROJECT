using System;
using System.ComponentModel.DataAnnotations;

namespace CineMajesty.Models
{
	public class Movie
	{
		[Required]
		[Key]
		public int Movie_ID { get; set; }

		public string Movie_Name { get; set; }

		public string Movie_Desc { get; set; }

		public double Movie_Rating { get; set; }
	}
}

