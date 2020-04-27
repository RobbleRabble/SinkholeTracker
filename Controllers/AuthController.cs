using System;
using System.Collections.Generic;
// using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using SinkholeTracker.Models;
using SinkholeTracker.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
// using Microsoft.IdentityModel.Tokens;


namespace SinkholeTracker.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
    private DatabaseContext _context;
    readonly private string JWT_KEY;
    // public AuthController(DatabaseContext context, IConfiguration config)
    public AuthController(DatabaseContext context)
    {
    //   JWT_KEY = config["JWT_KEY"];
      _context = context;
    }
        [HttpPost("signup")]
        public async Task<ActionResult> SignUpUser(NewUser newUser)
        {
            return Ok(newUser);
        // var existingUser = await _context.Users.Any(u => u.Email.ToLower() == newUser.Email.ToLower());
        // if (existingUser)
        // {
        //     return BadRequest("Sorry, that email address has already been registered.");
        // }
        // creating the user
      var user = new User
      {
        Email = newUser.Email,
        FullName = newUser.FullName
      };
      var hashed = new PasswordHasher<User>().HashPassword(user, newUser.Password);
      user.HashedPassword = hashed;
       _context.Users.Add(user);
      await _context.SaveChangesAsync();
      // Generate the JWT
      user.HashedPassword = null;
    //   return Ok(new { Token = CreateJWT(user), user = user });
      return Ok();
        }
        
    }
}