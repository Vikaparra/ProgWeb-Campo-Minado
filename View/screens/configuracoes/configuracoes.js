var btnSair = document.getElementById("sair");
btnSair.addEventListener("click", () => {
    location.href = ("../tela_menu_principal/tela_menu_principal.php");
});

var modoDeJogo = document.querySelector("#modo_jogo");
var qtdCelulas = document.querySelector("#gridvalue");
var qtdBombas = document.querySelector("#bombvalue");

var botaoEnviar = document.querySelector("#jogar_configs");
var tabuleiro;

function onchangeQtdCelulas(){
    document.querySelector("#myRange").max = Math.floor((qtdCelulas.value*qtdCelulas.value*30)/100);
    document.querySelector("#bombvalue").value = Math.floor((qtdCelulas.value*qtdCelulas.value*30)/100);
    
}

botaoEnviar.addEventListener("click", ()=>{
    
    var valorModoDeJogo = modoDeJogo.value;
    var valorQtdCelulas = qtdCelulas.value;
    var valorQtdBombas = qtdBombas.value;
    
    tabuleiro = new Tabuleiro(valorQtdCelulas, valorQtdBombas, valorModoDeJogo);
    

    
    if(valorModoDeJogo == "rivotril" && JSON.stringify(tabuleiro) != "{}"){
        document.location.href = ("../tela-jogo-rivotril/tela-jogo-rivotril.php");
        let jsonTabuleiro = JSON.stringify(tabuleiro);
        sessionStorage.setItem("tabuleiro", jsonTabuleiro);
        
    }
    else if(valorModoDeJogo == "classico" && JSON.stringify(tabuleiro) != "{}"){
        document.location.href = ("../tela-jogo-classico/tela-jogo-classico.php");
        let jsonTabuleiro = JSON.stringify(tabuleiro);
        sessionStorage.setItem("tabuleiro", jsonTabuleiro);
        
    }else{
        document.location.reload();
    }
    
});