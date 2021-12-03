<?php

    session_start();
    $_SESSION['nome'] = "Guilherme";
    $_SESSION['sobrenome'] = "Coelho";
    $_SESSION['data'] = date('d/m/Y', time());

?>