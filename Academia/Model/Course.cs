using Academia.Model.contract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.Model
{
    [Table("Courses")]
    public class Course : IAuditable
    {
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string CourseCode { get; set; }

        public decimal Fees { get; set; }


        #region IAuditable

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }

        #endregion


        #region Navigation Property

        public ICollection<StudentCourse> StudentCourses { get; set; }
        #endregion

    }
}
