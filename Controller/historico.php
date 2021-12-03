<?php

$serverName = "localhost";
$username   = "root";
$password   = "";

try {
    $data = json_decode(file_get_contents('php://input'), true); //recebendo o que foi enviado do formulario
    $conn = new PDO("mysql:host=$serverName;dbname=progweb", "root", ""); //abrindo conexão com o banco de dados
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_SESSION["username"])){

        $sql = " SELECT * FROM user WHERE username = ?"; //criação e execução da query
        $execucao = $conn->prepare($sql);
        $execucao->execute([
            $_SESSION["username"], 
        ]);
        
        if ($resultado > 0) {
            echo json_encode(["result" => 201]);// realizou as mudanças
        }else{
            echo json_encode(["result" => 200]); //está ok mas não fez musdanças
        }

    }
            
} catch (PDOException $err) {
    echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
}

?>