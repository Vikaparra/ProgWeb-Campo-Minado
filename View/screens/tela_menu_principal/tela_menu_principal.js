function loadData(){
    fetch("../../../Controller/inicial.php")
    .then(response => response.json())
    .then(data => printValues(data))
    .catch(error => console.log(error))
}

function printValues(data){
    var table = document.querySelector("table");
    var top = new Set(data);
    var posicao = 0;
    const imgs=['../../shared/imgs/trofeus/ouro.png','../../shared/imgs/trofeus/prata.png','../../shared/imgs/trofeus/bronze.png']
    
    top.forEach(partida => {
        let tableRow = document.createElement("tr");
        table.appendChild(tableRow);

        let classificacao = document.createElement("td");
        let span = document.createElement("span");
        let trofeu = document.createElement("img");
        trofeu.src = imgs[posicao];
        span.appendChild(trofeu);
        classificacao.appendChild(span);
        tableRow.appendChild(classificacao);
        posicao++;

        let jogador = document.createElement("td");
        let spantext = document.createElement("span");
        spantext.appendChild(jogador);
        tableRow.appendChild(spantext);
        jogador.innerText = partida.username;
    });
}

function logOut(){
    fetch("../../../Controller/logout.php")
    .then(response => console.log(response.status))
    .catch(error => console.log(error));
}