using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Academia.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.Tokens;

namespace Academia.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly AcademiaContext _Context;
        private readonly IConfiguration _Configuration;

        public AuthenticateController(
            AcademiaContext context,
            IConfiguration configuration
            )
        {
            _Context = context;
            _Configuration = configuration;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="form"></param>
        /// <returns></returns>
        [Route("authenticate")]
        [AllowAnonymous] 
        [HttpPost]
        public async Task<ActionResult<object>> Post(IFormCollection form)
        {
            if (!form.TryGetValue("UserName", out StringValues userName)
                || !form.TryGetValue("Password", out StringValues password)
                || StringValues.IsNullOrEmpty(userName) 
                || StringValues.IsNullOrEmpty(password))
            {
                return BadRequest();
            }

            
            var user = await _Context.Users
                .Where(t => userName.Equals(t.UserName))
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound();
            }

            var ph = new PasswordHasher<User>();
            var result = ph.VerifyHashedPassword(user, user.Password, password);

            if(result == PasswordVerificationResult.Success)
            {
                var token = GenerateJwtToken(user);

                return new
                {
                    Token = token,
                    User = user
                };
            }
            else
            {
                return Unauthorized(); 
            }
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("Id", user.Id.ToString()),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_Configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddMinutes(Convert.ToDouble(_Configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _Configuration["JwtIssuer"],
                _Configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );


            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}