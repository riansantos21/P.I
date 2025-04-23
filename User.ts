export class usuario {
    private id_user:number
    private name:string;
    private CPF:string;
    private email:string;
    private password:string;


    constructor(id_user:number,nameConst:string, CPFConst:string, emailConst:string, passConst:string){
        this.id_user = id_user
        this.name = nameConst;
        this.CPF = CPFConst;
        this.email = emailConst;
        this.password = passConst;
    };
    setId_Usuario(id_usuario:number){this.id_user = this.id_user
    };
    setName(nameConst:string):void{ this.name = nameConst
    };
    setCPF(CPFConst:string):void{ this.CPF = CPFConst
    };
    setEmail(emailConst:string):void{ this.email = emailConst
    };
    setPass(passConst:string):void{ this.password = passConst
    };


    getId_User():number{return this.id_user
    };
    getName():string{ return this.name
    };
    getCPF():string{return this.CPF
    };
    getEmail():string{ return this.email
    };
    getPass():string{ return this.password
    };
   


}
