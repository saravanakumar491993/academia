using Academia.constants;
using Academia.Model.contract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.Model
{
    [Table("Addresses")]
    public class Address : IAuditable
    {
        public long Id { get; set; }

        public string LineOne { get; set; }

        public string LineTwo { get; set; }

        public string Locality { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string PostalCode { get; set; }

        public CountryCode CountryCode { get; set; }

        [ForeignKey("LastUpdatedUser")]
        public long LastUpdatedBy { get; set; }


        #region IAuditable

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }

        #endregion


        #region Navigation property

        public Person LastUpdatedUser { get; set; }

        #endregion
    }
}
