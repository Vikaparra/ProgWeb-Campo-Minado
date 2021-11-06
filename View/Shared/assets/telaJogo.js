var tabuleiro = sessionStorage.getItem("tabuleiro");
    tabuleiro = JSON.parse(tabuleiro);

// //console.log(tabuleiro.tempo)

    var tempo = document.getElementById("tempo");

    startTimer(tempo);



var bombas = document.getElementById("numero-bombas");
bombas.innerText = ("Numero de Bombas: " + tabuleiro.numeroBombas);

var grid = document.getElementById("grid");
grid.innerText = ("Grid: " + tabuleiro.numeroCelulas + "x" + tabuleiro.numeroCelulas);

var alterarConfigs = document.getElementById("botao-config");
alterarConfigs.addEventListener("click", ()=>{
    document.location.href = ("../configuracoes/configs.html");
});

var trapacaBtn = document.getElementById("trapaca");
trapacaBtn.addEventListener("click", ()=>{
    trapaca();
});