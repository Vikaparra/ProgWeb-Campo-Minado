<?php

    function iniciarSessao($data){
        session_start(); // Inicia a sessão
        $_SESSION['username'] = $data["username"]; // Seta as informações do usuário
        $_SESSION['nome'] = $data["nome"];
    }

    function verificarSessao(){
         session_start();
         if(!isset($_SESSION['username'])){ // Se as informações do usuário não estiverem setadas
             header("Location:"."../inicial/inicial.html"); // Envia para pagina inicial
         }
    }

?>