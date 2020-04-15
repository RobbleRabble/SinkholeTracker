using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SinkholeTracker.Models;

namespace SinkholeTracker.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SinkholesController : ControllerBase
  {
    private readonly DatabaseContext _context;
    private readonly string _MAPBOX_TOKEN;

    public SinkholesController(DatabaseContext context, IConfiguration config)
    {
      _context = context;
      this._MAPBOX_TOKEN = config["mapbox-token"];
    }

    // GET: api/Sinkholes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Sinkhole>>> GetSinkholes()
    {
      return await _context.Sinkholes.ToListAsync();
    }

    // GET: api/Sinkholes/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Sinkhole>> GetSinkhole(int id)
    {
      var sinkhole = await _context.Sinkholes.FindAsync(id);

      if (sinkhole == null)
      {
        return NotFound();
      }

      return sinkhole;
    }

    // PUT: api/Sinkholes/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutSinkhole(int id, Sinkhole sinkhole)
    {
      if (id != sinkhole.Id)
      {
        return BadRequest();
      }

      _context.Entry(sinkhole).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!SinkholeExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Sinkholes
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Sinkhole>> PostSinkhole(Sinkhole sinkhole)
    {
      _context.Sinkholes.Add(sinkhole);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetSinkhole", new { id = sinkhole.Id }, sinkhole);
    }

    // DELETE: api/Sinkholes/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Sinkhole>> DeleteSinkhole(int id)
    {
      var sinkhole = await _context.Sinkholes.FindAsync(id);
      if (sinkhole == null)
      {
        return NotFound();
      }

      _context.Sinkholes.Remove(sinkhole);
      await _context.SaveChangesAsync();

      return sinkhole;
    }

    private bool SinkholeExists(int id)
    {
      return _context.Sinkholes.Any(e => e.Id == id);
    }
  }
}
