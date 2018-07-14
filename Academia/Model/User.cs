using Academia.constants;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.Model
{

    public class User : Person
    {

        [Required]
        [StringLength(50)]
        public string UserName { get; set; }

        public string Password { get; set; }

    }
}
