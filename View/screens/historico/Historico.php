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
    <link rel="stylesheet" href="./historico.css">
    <link rel="shortcut icon" href="../../shared/imgs/Bomba/bomba.png" type="image/x-icon">
    <title>Histórico</title>
</head>

<body onload="loadData()">
    <div class="container">

        <h2 id="titulo">HISTORICO</h2>
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
            <button id="voltar_historico" class="general-button" type="button">
                    VOLTAR
            </button>
        </div>
    </div>


    <script>
        document.getElementById("voltar_historico").onclick = function() {
            location.href = ("../tela_menu_principal/tela_menu_principal.php");
        };
    </script>
    <script src="puxandohistorico.js"></script>

</body>

</html>