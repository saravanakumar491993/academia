using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academia.constants
{
    public enum NamePrefix { Adm, Atty, Brother, Capt, Chief, Cmdr, Col, Dean, Dr, Elder, Father, Gen, Gov, Hon, LtCol, Maj, MSgt, Mr, Mrs, Ms, Prince, Prof, Rabbi, Rev, Sister }
    public enum NameSuffix { CPA, DDS, Esq, JD, Jr, LLD, MD, PhD, Ret, RN, Sr, DO }
    public enum Gender { M, F, O }
    public enum BloodGroup { A_Positive, A_Negative, B_Positive, B_Negative, O_Positive, O_Negative, AB_Positive, AB_Negative }
    public enum MaritalStatus { Single, Married, Divorced, Widowed, Seperated, LIfeTimePartner }
    public enum PersonStatus { Active, Deleted }
    public enum CountryCode { IND }
    public enum PhoneType { Work, Personal }
}
