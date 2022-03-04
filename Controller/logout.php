<?php
    session_start();
    session_destroy();
    header("Location:"."../View/screens/inicial/inicial.html");
    exit();
?>