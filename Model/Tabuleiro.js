"use strict";

export class Tabuleiro {Tabuleiro}

class Tabuleiro{

    /*
    1 = bomba
    -1 = sem bomba
    0 = aberto
    */

    constructor(numeroCelulas, numeroBombas){
        if(numeroCelulas > 20 || numeroCelulas < 5){
            window.alert("Insira um número de células entre 5 e 20");
            
        }else{
            this.numeroCelulas = numeroCelulas;
        }

        let limiteBombas = (numeroCelulas*30)/100;
        if(numeroBombas > limiteBombas || numeroBombas < 1){
            window.alert("Insira um número de bombas entre 1 e " + limiteBombas);
            
        }else{
            this.numeroBombas = numeroBombas;
        }
        
        var matriz = [];

        for (let i = 0; i < numeroCelulas; i++) {
            matriz.push([]);
            for(let j = 0; j < numeroCelulas; j++){
                matriz[i].push(-1);
            }
            
        }

        this.matriz = matriz;

        this.inserirBomas(numeroCelulas, numeroBombas);
        
    };

    inserirBomas(numeroCelulas, numeroBombas) {

        var numBombas = 0;

        while (numBombas < numeroBombas) {
            let linha = Math.round(Math.random() * ((numeroCelulas-1) - 0) + 0);
            let coluna = Math.round(Math.random() * ((numeroCelulas-1) - 0) + 0);

            if(this.matriz[linha][coluna] == -1){
                this.matriz[linha][coluna] = 1;
                numBombas++;
            }
        }
    }

    printMatriz(){
        console.log(this.matriz)
    }
}
