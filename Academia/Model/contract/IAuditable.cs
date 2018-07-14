using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.Model.contract
{
    public interface IAuditable
    {
        DateTime CreatedTime { get; set; }
        DateTime UpdatedTime { get; set; }
    }
}
