"use strict";
class Tabuleiro{

    /*
    B = bomba
    0 = sem bomba
    */

    constructor(numeroCelulas, numeroBombas, modoJogo){
        if(numeroCelulas > 20 || numeroCelulas < 5){
            window.alert("Insira um número de células entre 5 e 20");
            return 0;
        }else{
            this.numeroCelulas = numeroCelulas;
        }

        let limiteBombas = Math.floor((numeroCelulas*numeroCelulas*30)/100);
        if(numeroBombas > limiteBombas || numeroBombas < 1){
            window.alert("Insira um número de bombas entre 1 e " + limiteBombas);
            return 0;
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
            return 0;
        }else{
            this.modoJogo = modoJogo;
            if(this.modoJogo == "rivotril"){
                this.tempo = 15*numeroBombas;
            }else{
                this.tempo = 0;
            }
        }

        this.celulasAbertas = 0;
        this.celulasSb = (numeroCelulas*numeroCelulas) - numeroBombas;
        this.matriz = matriz;
        
        this.inserirBombas(numeroCelulas, numeroBombas);
        this.preencherNumeros();
        
    };

    inserirBombas(numeroCelulas, numeroBombas) {

        var numBombas = 0;

        while (numBombas < numeroBombas) {
            let linha = Math.round(Math.random() * ((numeroCelulas-1) - 0) + 0);
            let coluna = Math.round(Math.random() * ((numeroCelulas-1) - 0) + 0);

            if(this.matriz[linha][coluna] == 0){
                this.matriz[linha][coluna] = "B";
                numBombas++;
            }
        }
        this.printMatriz();
    }

    verificar(linha, coluna){

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

printMatriz(){
    console.log(this.matriz);
}

}