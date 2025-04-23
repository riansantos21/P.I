select*from pet
select*from historicoenchente
select*from enderecouser
select*from userabrigo
select*from abrigo
select*from historicoenchente
select*from pet
select*from post
select*from resgatar_salva
select*from rio
select*from riscogeralarea
select*from usuario



insert into resgatar_salva(nometutor,telefonetutor,localresgate,id_pet,id_abrigo)
values('josue','5531999999991','casa',1,1)

insert into riscogeralarea(id_endereco,id_risco,rio_datahora)
values(1,1,'20\1\2025')

insert into rio(altura,datahora)
values(5,'20\1\2025')

insert into userabrigo(id_abrigo,id_usuario)
values(1,1)

insert into historicoenchente(id_enchente,id_endereco)
values(1,1)

insert into pet(nome,raca,id_pet,foto,tipo,peso,status,sexo)
values('toby','salshisha',1,'url','pequeno','1','sumido','m')

insert into usuario(id_usuario,cpf,email,senha,nomecompleto,datacadastro,telefone)
values(1,1234567890,'algunemail@gmail.com','alguem sabe quem','ningemsabe','21\2\2011','5531997799551')

insert into enderecouser(id_usuario,id_endereco)
values(1,1)

insert into enchente(nome,id_enchente,data)
values ('Enchente2024',1,'02\02\2024')

insert into post(id_post,datapost,imagem,id_usuario)
values(1,'23\2\2002','url',1)

