function loadData(){
    fetch("../../../Controller/retrieveRanking.php")
    .then(response => response.json())
    .then(data => printValues(data))
    .catch(error => console.log(error))
}

function printValues(data){
    var table = document.querySelector("table");
    
    data.forEach(partida => {
        let tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        let jogador = document.createElement("td");
        tableRow.appendChild(jogador);
        let dimensoes = document.createElement("td");
        tableRow.appendChild(dimensoes);
        let bombas = document.createElement("td");
        tableRow.appendChild(bombas);
        let modalidade = document.createElement("td");
        tableRow.appendChild(modalidade);
        var tempo = document.createElement("td");
        tableRow.appendChild(tempo);
        let result = document.createElement("td");
        tableRow.appendChild(result);
        let dataHora = document.createElement("td");
        tableRow.appendChild(dataHora);

        jogador.innerText = partida.username;
        dimensoes.innerText = (partida.dimensoes + " x " + partida.dimensoes);
        bombas.innerText = partida.numero_bombas;
        modalidade.innerText = partida.modalidade == 0 ? "Classico" : "Rivotril";
        var minutos = parseInt(partida.tempo_gasto / 60, 10);
        var segundos = parseInt(partida.tempo_gasto % 60, 10);
        tempo.innerText = minutos + ":" + segundos;
        result.innerText = partida.resultado == 1 ? "Vitoria" : "Derrota";
        var data = new Date(partida.data_hora);
        dataHora.innerHTML = (data.getDate() + "/" + (1+ data.getMonth()) + "/" + data.getFullYear() + " <br> " + data.getHours() + ":" + data.getMinutes());
        dataHora.style = "text-align:center"
    });

}