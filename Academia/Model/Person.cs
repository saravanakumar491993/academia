using Academia.constants;
using Academia.Model.contract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.Model
{
    [Table("People")]
    public abstract class Person : IAuditable
    {
        public long Id { get; set; }

        public NamePrefix? Prefix { get; set; }

        public NameSuffix? Suffix { get; set; }

        public string Initial { get; set; }

        [StringLength(25)]
        [Required]
        public string FirstName { get; set; }

        [StringLength(25)]
        [Required]
        public string LastName { get; set; }

        [StringLength(25)]
        public string MiddleName { get; set; }

        [StringLength(25)]
        public string NickName { get; set; }

        [Required]
        public Gender Gender { get; set; }

        [Required]
        public DateTime DOB { get; set; }

        [Required]
        public BloodGroup BloodType { get; set; }

        [Required]
        public CountryCode CountryCode { get; set; }

        [StringLength(512)]
        public string PhotoUrl { get; set; }

        [Required]
        public MaritalStatus MarriageStatus { get; set; }

        [StringLength(25)]
        public string SpouseName { get; set; }

        [ForeignKey("ReferredPerson")]
        public long? ReferredBy { get; set; }

        [ForeignKey("LastUpdatedUser")]
        public long? LastUpdatedBy { get; set; }

        [Required]
        public PersonStatus Status { get; set; }


        #region IAuditable

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }

        #endregion


        #region Navigation property

        public Person ReferredPerson { get; set; }

        public Person LastUpdatedUser { get; set; }

        public ICollection<PhoneNumber> PhoneNumbers { get; set; }

        #endregion

    }
}
