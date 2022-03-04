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
    <link rel="stylesheet" href="creditos.css">
    <link rel="shortcut icon" href="../../shared/imgs/Bomba/bomba.png" type="image/x-icon">
    <title>Creditos</title>
</head>

<body>

    <div class="container">
        <h2 class="titulo">CREDITOS</h2>

        <div class="box">

            <div class="container-imagens">
                <div>
                    <img class="imagens" src="../../shared/imgs/integrantes/ana.jpg" alt="Imagem de um dos criadores">
                    <h2>BAUDUCCO</h2>
                </div>

                <div>
                    <img class="imagens" src="../../shared/imgs/integrantes/vika.jpg" alt="Imagem de um dos criadores">
                    <h2>VIKA</h2>
                </div>

                <div>
                    <img class="imagens" src="../../shared/imgs/integrantes/myrelle.jpg" alt="Imagem de um dos criadores">
                    <h2>MYRELLE</h2>
                </div>
            </div>

            <div class="container-imagens">
                <div>
                    <img class="imagens" src="../../shared/imgs/integrantes/gabriel.jpg" alt="Imagem de um dos criadores">
                    <h2>GABRIEL</h2>
                </div>

                <div>
                    <img class="imagens" src="../../shared/imgs/integrantes/joao.jpg" alt="Imagem de um dos criadores">
                    <h2>SID</h2>
                </div>
            </div>
        </div>
        
        <div class="botoes">
            <div>
                <button id="voltar_ranking" class="general-button" type="button">
                    VOLTAR
                </button>
            </div>
    </div>

    </div>


    <script>
        document.getElementById("voltar_ranking").onclick = function() {
            location.href = ("../tela_menu_principal/tela_menu_principal.php");
        };
    </script>

</body>

</html>