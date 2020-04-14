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
  }
}