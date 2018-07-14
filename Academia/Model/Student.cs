using Academia.Model.contract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.Model
{
    public class Student : Person
    {
        public DateTime DOJ { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }
    }
}
