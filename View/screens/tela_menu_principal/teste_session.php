<?php
    session_start();
    echo "Esta é a segunda página <br />";
    echo $_SESSION['nome'] . "<br />";
    echo $_SESSION['username'] . "<br />";
?>