<?php
    $sname = "localhost";
    $uname = "root";
    $pwd = "";
    $conn;

    try {
        $conn = new PDO("mysql:host=$sname;dbname=progweb", $uname, $pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }
?>
