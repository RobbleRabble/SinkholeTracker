using System;
using System.Collections.Generic;
namespace SinkholeTracker.Models
{

  public class Sinkhole
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Formation { get; set; }
    public string County { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string FullAddress { get; set; }
    // public int Volume { get; set; }

    // public DateTime CreatedAt { get; set; } = DateTime.Now;

    public List<Review> Reviews { get; set; } = new List<Review>();
  }
}