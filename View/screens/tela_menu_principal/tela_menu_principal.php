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
    <link rel="stylesheet" href="./tela_menu_principal.css">
    <link rel="shortcut icon" href="../../shared/imgs/Bomba/bomba.png" type="image/x-icon">
    <title>Menu Principal</title>
</head>

<body onload="loadData()">
    <div class="body">
        <nav class="side-menu">
            <div id="divimagem">
                <img class="pirata-img" src="../../shared/imgs/Pirata_char/pirata_jpg.gif" alt="Personagem em pixelart de um pirata">
                <?php
                    echo "<h2 id='pirate-name' class='pirate-name'>".$_SESSION['nome']."</h2>";
                ?>
            </div>
            <div class="div-buttons-left">
                <button id="perfil_menu" class="general-button ">PERFIL</button>
                <button id="historico_menu" class="general-button">HISTORICO</button>
                <button id="creditos_menu" class="general-button">CREDITOS</button>
            </div>
        </nav>
        <div>
            <button id="jogar_menu" class="button-jogar">
            JOGAR!
        </button>
        </div>
        <section class="side-menu">
            <h3>TOP 3</h3>
            <div>
                <table>                    
                </table>

            </div>

            <div class="div-buttons-right">
                <button id="ranking_menu" class="general-button ">VER RANKING</button>
                <button id="sair_menu" class="general-button button-vermelho">SAIR</button>
            </div>
        </section>
    </div>


    <script>
        document.getElementById("perfil_menu").onclick = function() {
            location.href = ("../tela_perfil/tela_perfil.php");
        };
    </script>
    <script>
        document.getElementById("historico_menu").onclick = function() {
            location.href = ("../historico/Historico.php");
        };
    </script>
    <script>
        document.getElementById("creditos_menu").onclick = function() {
            location.href = ("../creditos/Tela_de_Creditos.php");
        };
    </script>
    <script>
        document.getElementById("jogar_menu").onclick = function() {
            location.href = ("../configuracoes/configs.php");
        };
    </script>
    <script>
        document.getElementById("ranking_menu").onclick = function() {
            location.href = ("../tela_de_ranking/Tela_de_Ranking.php");
        };
    </script>
    <script src="./tela_menu_principal.js"></script>
    <script>
        document.getElementById("sair_menu").onclick = function() {
            logOut();
            location.href = ("../inicial/inicial.html");
        };
    </script>
    


</body>

</html>