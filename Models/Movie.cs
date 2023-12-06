using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tix.Models
{
    public class Movie
    {
        [Key]
        public string Movie_ID { get; set; }
    }
}
