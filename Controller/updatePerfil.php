<?php

$serverName = "localhost";
$username   = "root";
$password   = "";

try {
    session_start();
    
    $conn = new PDO("mysql:host=$serverName;dbname=progweb", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents('php://input'), true);

    $result = $conn->exec("
        UPDATE user 
        SET 
        nome_user = '".$data["nome_user"]."',
        data_nascimento = '".$data["data_nascimento"]."',
        telefone = '".$data["telefone"]."',
        email = '".$data["email"]."',
        senha = '".$data["senha"]."'
        WHERE id_user = ".$data["id_user"]."
    ");


     if ($result > 0) {
         echo json_encode(["result" => 201]);// realizou as mudanças
     }else{
         echo json_encode(["result" => 200]);// está ok mas não fez musdanças
    }

                 

} catch (PDOException $err) {
    echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
}

?>