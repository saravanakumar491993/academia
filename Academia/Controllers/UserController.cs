using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Academia.Filter;
using Academia.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Academia.Controllers
{
    /// <summary>
    /// A controller class for User
    /// </summary>
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AcademiaContext _Context;


        public UserController(
            AcademiaContext context
            )
        {
            _Context = context;
        }

        /// <summary>
        /// Gets a user for given <paramref name="id"/>
        /// </summary>
        /// <param name="id">Identifier of a user</param>
        /// <returns><see cref="User"/> object if found or emmpty body content</returns>
        /// <response code="200">User found</response>
        /// <response code="404">User not found</response>  
        [HttpGet("{id}", Name = "GetUser")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public async Task<ActionResult<User>> Get(long id)
        {
            var user = await _Context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        /// <summary>
        /// Creates a new user.
        /// </summary>
        /// <param name="user"><see cref="User"/> to be created</param>
        /// <returns>A created user <see cref="User"/></returns>
        /// <response code="201">User is created</response>
        /// <response code="400">If the provided user is invalid</response>  
        /// <response code="409">If the user already exists</response>  
        [HttpPost]
        [ValidateModel]
        [AllowAnonymous]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(409)]
        public async Task<ActionResult<User>> Post([FromBody] User user)
        {
            bool userExists = await _Context.Users.AnyAsync(t => user.UserName.Equals(t.UserName));

            if(userExists)
            {
                return Conflict();
            }

            var ph = new PasswordHasher<User>();
            user.Password = ph.HashPassword(user, user.Password);

            _Context.Add(user);
            await _Context.SaveChangesAsync();

            return user;
        }
    }
}