using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using SinkholeTracker.ViewModels;

namespace SinkholeTracker.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : Controller
    {
        [HttpPost("signup")]
        public async Task<ActionResult> SignUpUser(NewUser user)
        {
            return Ok(user);
        }
    }
}