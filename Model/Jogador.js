"use strict";

class Jogador{
    constructor(nome, dataNascimento, cpf, telefone, email, username, senha, confirmSenha){
        
        if(nome=="" || dataNascimento=="" || cpf=="" || telefone=="" || email=="" || username=="" || senha=="" || confirmSenha==""){
            window.alert("Insira valores válidos");
        }else{
            this.nome = nome;
            this.dataNascimento = dataNascimento;
            this.cpf = cpf;
            this.telefone = telefone;
            this.email = email;
            this.username = username;
            this.senha = senha;
            this.confirmSenha = confirmSenha;
        }
    }

    
}