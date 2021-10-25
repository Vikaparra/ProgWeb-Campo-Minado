function guardaConfig(){
    var selection = document.getElementById("modo_jogo");
    var quantidade = document.getElementById("quantity");
    var range = document.getElementById("myRange");

    var dados = JSON.parse(localStorage.getItem("dadosConfiguracao"));

    if(dados == null){
        localStorage.setItem("dadosConfiguracao", "[]");
        dados = [];
    }

    var auxRegistro = {
        selection: modo_jogo.value,
        quantidade: quantity.value,
        range: myRange.value,
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosConfiguracao", JSON.stringify(dados));
}