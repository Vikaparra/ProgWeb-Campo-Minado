var tabuleiro = sessionStorage.getItem("tabuleiro");
    tabuleiro = JSON.parse(tabuleiro);

var tempo = document.getElementById("tempo");

startTimer(tempo);

var bombas = document.getElementsByClassName("numero-bombas");
for (var i = 0; i < bombas.length; i++) {
    bombas[i].innerText = ("Numero de Bombas: " + tabuleiro.numeroBombas);
}

var grid = document.getElementsByClassName("grid");
for (var i = 0; i < grid.length; i++) {
    grid[i].innerText = ("Grid: " + tabuleiro.numeroCelulas + "x" + tabuleiro.numeroCelulas);
}

var alterarConfigs = document.getElementsByClassName('botao-config');
for (var i = 0; i < alterarConfigs.length; i++) {
    alterarConfigs[i].addEventListener('click',  ()=>{
        document.location.href = ("../configuracoes/configs.php");
    }, false);
}

var sair = document.getElementsByClassName('botao-sair-jogo');
for (var i = 0; i < sair.length; i++) {
    sair[i].addEventListener('click',  ()=>{
        document.location.href = ("../tela_menu_principal/tela_menu_principal.php");
    }, false);
}

var trapacaBtn = document.getElementById("trapaca");
trapacaBtn.addEventListener("click", ()=>{
    trapaca();
});

