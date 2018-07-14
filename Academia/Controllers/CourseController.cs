using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academia.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Academia.Controllers
{
    /// <summary>
    /// A controller class for Course
    /// </summary>
    [Route("api/courses")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly AcademiaContext _Context;
        public CourseController(AcademiaContext context)
        {
            _Context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> Get()
        {
            return await _Context.Courses.ToListAsync();
        }

        [HttpGet("{id}", Name = "GetCourse")]
        public async Task<ActionResult<Course>> Get(long id)
        {
            var course = await _Context.Courses.FindAsync(id);
            if(course == null)
            {
                return NotFound();
            }

            return CreatedAtRoute("GetCourse", new { id = course.Id }, course);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Course course)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _Context.Add(course);
            await _Context.SaveChangesAsync();

            return CreatedAtRoute("GetCourse", new { id = course.Id }, course);
        }

        //[HttpPut("{id}")]
        //public void Put(long id, [FromBody] string value)
        //{
        //}

        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
