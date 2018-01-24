export class CompanyInfo{
    info: string;
    contacts: { 
        office: {
            address: String,
            phoneNumber: String,
            fax: String,
            email: String
        } ,
        factory: {
            address: String,
            phoneNumber: String
        }
     };
}

