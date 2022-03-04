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
    <link rel="stylesheet" href="../../shared/assets/button.css">
    <link rel="stylesheet" href="../../shared/assets/normalize.css">
    <link rel="stylesheet" href="./Rankingcss.css">
    <link rel="shortcut icon" href="../../shared/imgs/Bomba/bomba.png" type="image/x-icon">
    <title>Histórico</title>
</head>

<body onload="loadData()">
    <div class="container">

        <div class="div-img">
            <img id="trofeus" src="../../shared/imgs/trofeus/conjunto-de-trofeus-com-estilo-pixel-art_475147-84-removebg-preview.png" alt="Imagem de 3 troféus, um de ouro, um de prata e um de bronze.">
        </div>

        <h2 class="titulo">RANKING</h2>
        <div class="box">

            <table>
                <tr class="titulos-tabela">
                    <th>JOGADOR </th>
                    <th>DIMENSOES </th>
                    <th>BOMBAS </th>
                    <th>MODALIDADE </th>
                    <th>TEMPO</th>
                    <th>RESULTADO </th>
                    <th>DATA/HORA </th>
                </tr>
            </table>
        </div>

        <div class="botoes">
            <button id="voltar_ranking" class="general-button" type="button">
                    VOLTAR
            </button>
        </div>
    </div>


    <script>
        document.getElementById("voltar_ranking").onclick = function() {
            location.href = ("../tela_menu_principal/tela_menu_principal.php");
        };
    </script>

    <script src="./tela_de_ranking.js"></script>

</body>

</html>