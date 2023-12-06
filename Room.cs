using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CineMajesty.Models
{
	public class Room
	{
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Room_ID { get; set; }

        [Required]
        public int Room_SeatCapacity { get; set; }

        [Required]
        public int Room_Type { get; set; }

        [Required]
        public string Room_Name { get; set; }

        [Required]
        [ForeignKey("Movie")]
        public string Movie_ID { get; set; }
        public virtual Movie Movie { get; set; }

        public ICollection<Seat> Seats { get; set; }
    }
}

