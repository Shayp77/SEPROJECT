using System;
using System.ComponentModel.DataAnnotations;

namespace CineMajesty.Models
{
	public class Movie
	{
		[Required]
		[Key]
		public string Movie_ID { get; set; }

        public ICollection<Room> Rooms { get; set; }
    }
}

