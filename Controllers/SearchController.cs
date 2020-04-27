using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SinkholeTracker.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SinkholeTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
    private DatabaseContext _context;

    // Depends?   
    public SearchController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpGet("sinkholes")]
    public async Task<ActionResult> SearchHoles(string searchTerm)
    // code
    {

      // find all trails, where the name contains searchTerm
      // BONSU: case insenstive 

      var results = _context.Sinkholes.Where(w =>
        w.Name.ToLower().Contains(searchTerm.ToLower()) ||
        w.Description.ToLower().Contains(searchTerm.ToLower()) ||
        w.County.ToLower().Contains(searchTerm.ToLower()) 
        // ||
        // w.Id.ToLower().Contains(searchTerm.ToLower())
      );


      return Ok(await results.ToListAsync());
    }
    }
}