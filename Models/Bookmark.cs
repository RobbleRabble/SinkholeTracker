using System.Text.Json.Serialization;

namespace SinkholeTracker.Models
{
  public class Bookmark
  {
    public int Id { get; set; }

    public int SinkholeId { get; set; }
    public Sinkhole Sinkhole { get; set; }
    public int UserId { get; set; }
    [JsonIgnore]
    public User User { get; set; }
  }
}