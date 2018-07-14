using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academia.Filter;
using Academia.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace Academia.Controllers
{
    [Route("api/students")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly AcademiaContext _Context;

        public StudentController(AcademiaContext context)
        {
            _Context = context;
        }

        [HttpGet]

        public async Task<ActionResult<object>> Get()
        {
            return await _Context.Students
                .Include(p => p.ReferredPerson)
                .Include(p => p.PhoneNumbers)
                .Include(p => p.StudentCourses)
                .Select(p => new
                {
                    p.FirstName,
                    PhoneNumber = p.PhoneNumbers.Select(ph => new
                    {
                        ph.Number,
                        ph.IsPrimary
                    }),
                    Courses = p.StudentCourses == null ? null : p.StudentCourses.Select(sc => new
                    {
                        sc.Course.Name,
                        sc.Course.Id
                    }),
                    p.DOJ,
                    ReferredBy = p.ReferredPerson == null ? null : p.ReferredPerson.FirstName
                }).ToListAsync();
        }

        [HttpGet("{id}", Name = "GetStudent")]
        public async Task<ActionResult<object>> Get(long id)
        {
            var item = await _Context.Students
                .Where(t => t.Id == id)
                .Select(s => new
                {
                    s.FirstName,
                    PhoneNumber = s.PhoneNumbers.Select(ph => new
                    {
                        ph.Number,
                        ph.IsPrimary
                    }),
                    Courses = s.StudentCourses == null ? null : s.StudentCourses.Select(sc => new
                    {
                        sc.Course.Name,
                        sc.Course.Id
                    }),
                    s.DOJ,
                    ReferredBy = s.ReferredPerson == null ? null : s.ReferredPerson.FirstName
                }).SingleOrDefaultAsync();

            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _Context.Add(student);
            await _Context.SaveChangesAsync();

            return CreatedAtRoute("GetStudent", new { id = student.Id }, student);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, [FromBody] Student student)
        {
            var p = await _Context.Students
                .Where(t => t.Id == id)
                .Include(t => t.PhoneNumbers)
                .Include(t => t.StudentCourses)
                .SingleOrDefaultAsync();

            if (p == null)
            {
                return NotFound();
            }

            p.PhoneNumbers =  student.PhoneNumbers;
            p.StudentCourses = student.StudentCourses;
            _Context.Update(p);
            await _Context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var todo = _Context.Students.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _Context.Students.Remove(todo);
            await _Context.SaveChangesAsync();
            return NoContent();
        }
    }
}
