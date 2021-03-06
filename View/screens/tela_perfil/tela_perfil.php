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
    <link rel="shortcut icon" href="../../shared/imgs/Bomba/bomba.png" type="image/x-icon">
    <script src="https://kit.fontawesome.com/6d7b072ee1.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" type="text/css" href="tela_perfil.css">
    <title>SEU PERFIL!</title>
</head>

<body class="background" onload="loadData()">

    <div class="container">
        <h2 class="titulo">SEU PERFIL</h2>


        <div class="box wrap">
            <form>

                <label for="campo_nome_perfil">NOME COMPLETO:</label>
                <div class="displayflex row">
                    <input type="text" id="campo_nome_perfil" placeholder="Insira seu nome completo">
                    <span>
                        <i class="fas fa-edit"></i>
                    </span>
                </div>

                <div class="displayflex row">
                    <div class="displayflex column">
                        <label for="campo_datanasc_perfil">DATA DE NASCIMENTO:</label>
                        <div class="displayflex row">
                            <input type="date" id="campo_datanasc_perfil">
                            <span>
                                <i class="fas fa-edit"></i>
                            </span>
                        </div>
                    </div>
                    <div class="displayflex column">
                        <label for="campo_cpf_perfil">CPF:</label>
                        <div class="displayflex row">
                            <input type="number" id="campo_cpf_perfil" placeholder="CPF" readonly>
                        </div>
                    </div>
                </div>

                <label for="campo_telefone_perfil">TELEFONE COM DDD:</label>
                <div class="displayflex row">
                    <input type="text" id="campo_telefone_perfil" placeholder="(x x) x x x x x - x x x x">
                    <span>
                        <i class="fas fa-edit"></i>
                    </span>
                </div>

                <label for="campo_email_perfil">E-MAIL</label>
                <div class="displayflex row">
                    <input type="email" id="campo_email_perfil" placeholder="Insira seu e-mail">
                    <span>
                        <i class="fas fa-edit"></i>
                    </span>
                </div>

                <label for="campo_username_perfil">USERNAME:</label>
                <input type="text" id="campo_username_perfil" placeholder="username" readonly>

                <label for="campo_senha_perfil">SENHA:</label>
                <div class="displayflex row">
                    <input type="password" id="campo_senha_perfil" placeholder="Insira sua senha">
                    <span>
                        <i class="fas fa-edit"></i>
                    </span>
                </div>


                <label for="campo_confsenha_perfil">CONFIRME A SENHA:</label>
                <div class="displayflex row">
                    <input type="password" id="campo_confsenha_perfil" placeholder="Insira sua senha novamente">
                    <span>
                        <i class="fas fa-edit"></i>
                    </span>
                </div>

            </form>
        </div>

        <div class="botoes">
            <button id="voltar_perfil" class="general-button" type="button">
                VOLTAR
            </button>
            <button id="salvar_perfil" class="general-button" type="submit">
                SALVAR
            </button>
        </div>

    </div>


    <script>
        document.getElementById("voltar_perfil").onclick = function() {
            location.href = ("../tela_menu_principal/tela_menu_principal.php");
        };
    </script>
    <!-- <script>
        document.getElementById("salvar_perfil").onclick = function() {
            location.href = ("../tela_menu_principal/tela_menu_principal.php");
        };
    </script> -->
    <script src="./tela_perfil.js"></script>
</body>

</html>