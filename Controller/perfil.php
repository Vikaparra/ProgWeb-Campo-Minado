<?php

$serverName = "localhost";
$username   = "root";
$password   = "";

try {
    $conn = new PDO("mysql:host=$serverName;dbname=progweb", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $statement = $conn->query("SELECT * FROM user WHERE id_user = 1");
    
    $row = $statement->fetch(PDO::FETCH_ASSOC);
    echo json_encode($row);      

} catch (PDOException $err) {
    echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
}

?>