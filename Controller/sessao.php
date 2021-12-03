<?php

    function iniciarSessao($data){
        session_start();
        $_SESSION['username'] = $data["username"];
        $_SESSION['nome'] = $data["nome"];
    }

?>