"use strict";

// export class Tabuleiro {Tabuleiro}

class Tabuleiro{

    /*
    B = bomba
    0 = sem bomba
    */

    constructor(numeroCelulas, numeroBombas){
        if(numeroCelulas > 20 || numeroCelulas < 5){
            window.alert("Insira um número de células entre 5 e 20");
            
        }else{
            this.numeroCelulas = numeroCelulas;
        }

        let limiteBombas = (numeroCelulas*numeroCelulas*30)/100;
        if(numeroBombas > limiteBombas || numeroBombas < 1){
            window.alert("Insira um número de bombas entre 1 e " + limiteBombas);
            
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

        this.celulasAbertas = 0;
        this.celulasSb = numeroCelulas - numeroBombas;
        this.matriz = matriz;

        this.inserirBomas(numeroCelulas, numeroBombas);
        
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
}
