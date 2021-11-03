var tabuleiro = sessionStorage.getItem("tabuleiro");
    tabuleiro = JSON.parse(tabuleiro);

console.log(tabuleiro.tempo)

    var tempo = document.getElementById("tempo");

if(tabuleiro.tempo != null){
    let minutos = Math.floor(tabuleiro.tempo / 60);
    let segundos = tabuleiro.tempo - minutos * 60;
    tempo.innerText = (minutos + ":" + segundos);
}else{
    tempo.innerHTML = "00:00";
    
}


var bombas = document.getElementById("numero-bombas");
bombas.innerText = ("Numero de bombas: " + tabuleiro.numeroBombas);

var grid = document.getElementById("grid");
grid.innerText = ("Grid: " + tabuleiro.numeroCelulas + "x" + tabuleiro.numeroCelulas);

var trapacaBtn = document.getElementById("trapaca");
trapacaBtn.addEventListener("click", ()=>{
    trapaca();
});
