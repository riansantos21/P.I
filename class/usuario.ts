export class usuario {
    private name:string;
    private CPF:string;
    private email:string;
    private password:string;


    constructor(nameConst:string, CPFConst:string, emailConst:string, passConst:string){
        this.name = nameConst;
        this.CPF = CPFConst;
        this.email = emailConst;
        this.password = passConst;
    };

    setName(nameConst:string):void{ this.name = nameConst
    };
    setCPF(CPFConst:string):void{ this.CPF = CPFConst
    };
    setEmail(emailConst:string):void{ this.email = emailConst
    };
    setPass(passConst:string):void{ this.password = passConst
    };



    getName():string{ return this.name
    };
    getEmail():string{ return this.email
    };
    getPass():string{ return this.password
    };
   


}
