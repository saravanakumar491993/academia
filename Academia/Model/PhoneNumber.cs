using Academia.Model.contract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.Model
{
    [Table("PhoneNumbers")]
    public class PhoneNumber : IAuditable
    {
        public long Id { get; set; }

        [ForeignKey("Owner")]
        public long OwnerId { get; set; }

        [ForeignKey("LastUpdatedUser")]
        public long? LastUpdatedBy { get; set; }

        [Required]
        public string Number { get; set; }

        public bool IsPrimary { get; set; }


        #region IAuditable

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }

        #endregion


        #region Navigation Property

        public Person Owner { get; set; }

        public Person LastUpdatedUser { get; set; }
        
        #endregion
    }
}
