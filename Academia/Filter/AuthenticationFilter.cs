using Academia.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Academia.Filter
{

    public class AuthenticationFilter : IAsyncAuthorizationFilter
    {
        private IConfiguration _Configuration;
        private AcademiaContext _Context;

        public AuthenticationFilter(
            IConfiguration configuration,
            AcademiaContext context
            )
        {
            _Configuration = configuration;
            _Context = context;
        }

        public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {

            if (context.ActionDescriptor is ControllerActionDescriptor descriptor)
            {
                var controllerAttributes = descriptor.ControllerTypeInfo.CustomAttributes;
                if (controllerAttributes.Any(a => a.AttributeType == typeof(AllowAnonymousAttribute)))
                {
                    return;
                }

                var actionAttributes = descriptor.MethodInfo.CustomAttributes;
                if (actionAttributes.Any(a => a.AttributeType == typeof(AllowAnonymousAttribute)))
                {
                    return;
                }
            }


            var authToken = context.HttpContext.Request.Headers.ContainsKey("Authorization");
            if (!authToken)
            {
                context.Result = new UnauthorizedResult();
            }

            var userId = DecodeToken(context.HttpContext.Request.Headers["Authorization"]);
            if (userId == null)
            {
                context.Result = new UnauthorizedResult();
            }

            var user = await _Context.Users.FindAsync(userId);

        }


        /// <summary>
        /// Decodes the given token and returns the user id if token is valid otherwise returns null
        /// </summary>
        /// <param name="token">A token to be decoded</param>
        /// <returns>User id or null</returns>
        private long? DecodeToken(string token)
        {
            long? userId = null;

            var validationParameters = new TokenValidationParameters()
            {
                ValidIssuer = _Configuration["JwtIssuer"],
                ValidAudience = _Configuration["JwtIssuer"],
                ValidateLifetime = true,
                ValidateAudience = true,
                ValidateIssuer = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_Configuration["JwtKey"])),
                RequireExpirationTime = true,
                ClockSkew = TimeSpan.Zero,
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            try
            {
                var cp = tokenHandler.ValidateToken(token, validationParameters, out SecurityToken st);

                var claim = cp.Claims.FirstOrDefault(t => "Id".Equals(t.Type));
                if(claim != null)
                {
                    userId = long.Parse(claim.Value);
                }
            }
            catch { }
            return userId;
        }
    }
}
