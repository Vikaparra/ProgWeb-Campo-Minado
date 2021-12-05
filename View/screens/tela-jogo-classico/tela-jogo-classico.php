<?php
    require "../../../Controller/sessao.php";
    verificarSessao();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../shared/assets/button.css">
    <link rel="stylesheet" href="../../shared/assets/normalize.css">
    <link rel="stylesheet" href="tela-jogo-classico.css">
    <link rel="stylesheet" href="../../Shared/assets/matrizGUI.css">
    <link rel="shortcut icon" href="../../shared/imgs/Bomba/bomba.png" type="image/x-icon">
    <title>Campo Minado - Clássico</title>
</head>

<body onload="buildGridLayout()">
    <div id="container-principal" class="container">
        <section>
             <div id="title-usu">
                <b>AHOY, USUARIO</b>
             </div>
        </section>
        <aside>
            <div id="classico"><p>CLASSICO CLASSICO</p></div>

            <div id="time">
                <div class="time-item1">
                    <h1>TEMPO</h1>
                </div>
                <div class="time-item2">
                    <h1 id="tempo">00:00</h1>
                </div>
            </div>

            <div id="config-jogo">

                <div id="titulo-config">
                    <h1>CONFIGURACOES DE JOGO </h1>
                </div>

                <div id="info-jogo">
                    <p class="numero-bombas"></p>
                    <p class="grid"></p>
                    <p id="celulas-abertas">Celulas Abertas: 0</p>
                </div>

                <div>
                    <button class="general-button botao-config">ALTERAR CONFIGURACOES</button> 
                </div>
                <div>
                    <button id="sair-classico" class="general-button botao-sair-jogo">SAIR</button>
                </div>

            </div>

            <button id="trapaca" class="general-button">TRAPACA</button>
        </aside>
    </div>

    <script src="../../../Model/Tabuleiro.js"></script>
    <script src="../../../Controller/jogo.js"></script>
    <script src="../../Shared/assets/telaJogo.js"></script>


</body>

</html>