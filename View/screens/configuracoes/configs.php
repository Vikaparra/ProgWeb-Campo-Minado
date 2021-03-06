<?php 
    require("../../../Controller/sessao.php");
    verificarSessao();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../shared/assets/normalize.css">
    <link rel="stylesheet" href="../../shared/assets/button.css">
    <link rel="stylesheet" href="configs.css">
    <link rel="shortcut icon" href="../../shared/imgs/Bomba/bomba.png" type="image/x-icon">
    <title>Modo de Jogo</title>
</head>

<body>
    <div class="container">
        <div class="box">

            <p>MODO DE JOGO:</p>
            <select id="modo_jogo">
                <option value="selecione">SELECIONE</option>
                <option value="classico">CLASSICO</option>
                <option value="rivotril">RIVOTRIL</option>
            </select>
            <p>TAMANHO DA GRADE:</p>
            <div class="slidecontainer">
                <input type="number" class="inputcontainer" id="quantity" name="quantity" min="1" max="20" onchange="gridvalue.value=value; gridvalue2.value=value; onchangeQtdCelulas()">
                <p id="gridtext"><output id="gridvalue">0</output> x<output class="rangevalue" id="gridvalue2">0</output></p>
            </div>
            <p>NUMERO DE BOMBAS:</p>
            <div class="slidecontainer">
                <input type="range" min="1" max="99" class="slider" id="myRange" onchange="bombvalue.value=value">
                <output class="rangevalue" id="bombvalue">50</output>
            </div>
            <div>
                <button id="jogar_configs" class="general-button general-button-play" type="submit">
                        JOGAR!
                    </button>
            </div>

            <a id="sair" href="javascript:history.back()">
                <div class="div-button-voltar">                  
                    <img id="retornar" src="../../shared/imgs/icones/return3.png" alt="Icone de retornar para pagina anterior">
                </div>
            </a>
        </div>
    </div>

    <script src="../../../Model/Tabuleiro.js"></script>
    <script src="./configuracoes.js"></script>
</body>

</html>