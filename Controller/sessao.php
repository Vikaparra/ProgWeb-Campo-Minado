<?php

    function iniciarSessao($data){
        session_start();
        $_SESSION['username'] = $data["username"];
        $_SESSION['nome'] = $data["nome"];
    }

    function verificarSessao(){
         session_start();
         if(!isset($_SESSION['username'])){
             header("Location:"."../inicial/inicial.html");
             //forceRedirect("../View/screens/inicial/inicial.html");
         }

        // if(!isset($_SESSION['username'])){
        //     header("Location:"."../inicial/inicial.html");
        //     //forceRedirect("../View/screens/inicial/inicial.html");
        // }
    }

?>