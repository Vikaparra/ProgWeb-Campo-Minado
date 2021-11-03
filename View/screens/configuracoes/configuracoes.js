var modoDeJogo = document.querySelector("#modo_jogo");
var qtdCelulas = document.querySelector("#gridvalue");
var qtdBombas = document.querySelector("#bombvalue");

var botaoEnviar = document.querySelector("#jogar_configs");
var tabuleiro;

function onchangeQtdCelulas(){
    document.querySelector("#myRange").max = (qtdCelulas.value*qtdCelulas.value*30)/100;
    
}

botaoEnviar.addEventListener("click", ()=>{
    
    var valorModoDeJogo = modoDeJogo.value;
    var valorQtdCelulas = qtdCelulas.value;
    var valorQtdBombas = qtdBombas.value;
    
    tabuleiro = new Tabuleiro(valorQtdCelulas, valorQtdBombas, valorModoDeJogo);
    

    let jsonTabuleiro = JSON.stringify(tabuleiro);
    sessionStorage.setItem("tabuleiro", jsonTabuleiro);

    if(valorModoDeJogo == "rivotril"){
        document.location.href = ("../tela-jogo-rivotril/tela-jogo-rivotril.html");
        
    }
    else if(valorModoDeJogo == "classico"){
        document.location.href = ("../tela-jogo-classico/tela-jogo-classico.html");

    }
});

