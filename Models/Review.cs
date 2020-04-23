
using System;
using System.Text.Json.Serialization;

namespace SinkholeTracker.Models
{
  public class Review
  {
    public int Id { get; set; }
    public string Comment { get; set; }
    public bool Answer { get; set; }
    public DateTime When { get; set; } = DateTime.Now;

    // navigation properties
    public int SinkholeId { get; set; }

    [JsonIgnore]
    public Sinkhole Sinkhole { get; set; }
  }
}