using Academia.Model.contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.Model
{
    public class StudentCourse : IAuditable
    {
        public long StudentId { get; set; }

        public long CourseId { get; set; }


        #region IAuditable

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }

        #endregion

        
        #region Navigation Property

        public Student Student { get; set; }

        public Course Course { get; set; }

        #endregion
    }
}
