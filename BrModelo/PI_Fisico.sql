/* PI_Logico: */

CREATE TABLE Usuario (
    ID_Usuario Int PRIMARY KEY,
    CPF varchar(48),
    Email varchar(48),
    Senha varchar(48),
    NomeCompleto varchar(48),
    DataCadastro Date,
    Telefone Varchar(20)
);

CREATE TABLE Abrigo (
    ID_abrigo int PRIMARY KEY,
    Dono int,
    DataCadastro Date,
    Lotacao int,
    fk_Endereco_ID_Endereco int
);

CREATE TABLE Endereco (
    ID_Endereco int PRIMARY KEY,
    CEP int,
    Numero int,
    Bairro varchar(48),
    Latitude Varchar(20),
    Longitude Varchar(20),
    Cidade varchar(48),
    Complemento varchar(48),
    Rua varchar(48),
    CotaInundacao Int
);

CREATE TABLE AreaDeRisco (
    Descricao varchar(500),
    ID_Risco int PRIMARY KEY,
    Nome varchar(48)
);

CREATE TABLE Enchente (
    Data Date,
    ID_Enchente int PRIMARY KEY,
    Nome varchar(48)
);

CREATE TABLE RiscoLocal (
    fk_Endereco_ID_Endereco int,
    fk_AreaDeRisco_ID_Risco int,
    fk_Rio_DataPrecisa Date
);

CREATE TABLE Rio (
    Altura int,
    Data date,
    Hora date,
    DataPrecisa Date PRIMARY KEY
);

CREATE TABLE HistoricoEnchenteLocal (
    fk_Enchente_ID_Enchente int,
    fk_Endereco_ID_Endereco int
);

CREATE TABLE Tem (
    fk_Usuario_ID_Usuario Int,
    fk_Endereco_ID_Endereco int
);
 
ALTER TABLE Abrigo ADD CONSTRAINT FK_Abrigo_2
    FOREIGN KEY (fk_Endereco_ID_Endereco???)
    REFERENCES Endereco (???)
    ON DELETE CASCADE;
 
ALTER TABLE Abrigo ADD CONSTRAINT FK_Abrigo_3
    FOREIGN KEY (Dono???)
    REFERENCES ??? (???);
 
ALTER TABLE RiscoLocal ADD CONSTRAINT FK_RiscoLocal_1
    FOREIGN KEY (fk_Endereco_ID_Endereco)
    REFERENCES Endereco (ID_Endereco);
 
ALTER TABLE RiscoLocal ADD CONSTRAINT FK_RiscoLocal_2
    FOREIGN KEY (fk_AreaDeRisco_ID_Risco)
    REFERENCES AreaDeRisco (ID_Risco);
 
ALTER TABLE RiscoLocal ADD CONSTRAINT FK_RiscoLocal_3
    FOREIGN KEY (fk_Rio_DataPrecisa)
    REFERENCES Rio (DataPrecisa);
 
ALTER TABLE HistoricoEnchenteLocal ADD CONSTRAINT FK_HistoricoEnchenteLocal_1
    FOREIGN KEY (fk_Enchente_ID_Enchente)
    REFERENCES Enchente (ID_Enchente);
 
ALTER TABLE HistoricoEnchenteLocal ADD CONSTRAINT FK_HistoricoEnchenteLocal_2
    FOREIGN KEY (fk_Endereco_ID_Endereco)
    REFERENCES Endereco (ID_Endereco);
 
ALTER TABLE Tem ADD CONSTRAINT FK_Tem_1
    FOREIGN KEY (fk_Usuario_ID_Usuario)
    REFERENCES Usuario (ID_Usuario)
    ON DELETE SET NULL;
 
ALTER TABLE Tem ADD CONSTRAINT FK_Tem_2
    FOREIGN KEY (fk_Endereco_ID_Endereco)
    REFERENCES Endereco (ID_Endereco)
    ON DELETE SET NULL;