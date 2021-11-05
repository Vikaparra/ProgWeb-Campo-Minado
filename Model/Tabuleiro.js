"use strict";

// export class Tabuleiro {Tabuleiro}

class Tabuleiro{

    /*
    B = bomba
    0 = sem bomba
    */

    constructor(numeroCelulas, numeroBombas, modoJogo){
        if(numeroCelulas > 20 || numeroCelulas < 5){
            window.alert("Insira um número de células entre 5 e 20");
            return;
        }else{
            this.numeroCelulas = numeroCelulas;
        }

        let limiteBombas = (numeroCelulas*numeroCelulas*30)/100;
        if(numeroBombas > limiteBombas || numeroBombas < 1){
            window.alert("Insira um número de bombas entre 1 e " + limiteBombas);
            return;
            
        }else{
            this.numeroBombas = numeroBombas;
        }
        
        var matriz = [];

        for (let i = 0; i < numeroCelulas; i++) {
            matriz.push([]);
            for(let j = 0; j < numeroCelulas; j++){
                matriz[i].push(0);
            }
            
        }

        if(modoJogo == "selecione"){
            window.alert("selecione um modo de jogo");
            return;
        }else{
            this.modoJogo = modoJogo;
            if(this.modoJogo == "rivotril"){
                this.tempo = 15*numeroBombas;
            }else{
                this.tempo = null;
            }
        }

        this.celulasAbertas = 0;
        this.celulasSb = (numeroCelulas*numeroCelulas) - numeroBombas;
        this.matriz = matriz;
        
        this.inserirBomas(numeroCelulas, numeroBombas);
        this.preencherNumeros();
        
    };

    inserirBomas(numeroCelulas, numeroBombas) {

        var numBombas = 0;

        while (numBombas < numeroBombas) {
            let linha = Math.round(Math.random() * ((numeroCelulas-1) - 0) + 0);
            let coluna = Math.round(Math.random() * ((numeroCelulas-1) - 0) + 0);

            if(this.matriz[linha][coluna] == 0){
                this.matriz[linha][coluna] = "B";
                numBombas++;
                //talvez ja fazer uma função pra ja somar 1 nos espaços em volta aqui
                //vai ficar mais eficiente
                // !!!!!!!!!!
                // !!!!!!!!!!
                // !!!!!!!!!!
                // le ali em cima
            }
        }
        this.printMatriz();
    }

    printMatriz(){
        console.log(this.matriz)
    }

    verificar(linha, coluna){
    

        console.log("aoooba")
        var numeroBombasEncontradas = 0;
    
        if(this.matriz[linha][coluna] == "B"){
           return "B";
        }else{
            for(let colunas=coluna-1; colunas <= (coluna+1); colunas++){
                for(let linhas=linha-1; linhas <= (linha+1); linhas++){
                    if(colunas >= 0 && linhas >= 0 && colunas < this.numeroCelulas && linhas < this.numeroCelulas){
                        if(this.matriz[linhas][colunas]=="B"){
                            numeroBombasEncontradas++;
                        }
                    }  
                }
            }
            return numeroBombasEncontradas;
        }
    }

    //Função para preencher o this com numeros das bombas em volta
    preencherNumeros(){
        
    for (let coluna = 0; coluna < this.numeroCelulas; coluna++) {
        for (let linha = 0; linha < this.numeroCelulas; linha++) {
            this.matriz[linha][coluna] = this.verificar(linha, coluna);        
        }
    }
}

}
