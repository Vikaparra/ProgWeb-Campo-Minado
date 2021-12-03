<?php

    $serverName = "localhost";
    $username   = "root";
    $password   = "";

    try {
        $conn = new PDO("mysql:host=$serverName;dbname=progweb", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $data = json_decode(file_get_contents('php://input'), true);

        $sql = "INSERT INTO user VALUES ("
        .$data["id_user"]." , '"
        .$data["username"]."','"
        .$data["nome"]."','"
        .$data["cpf"]."','"
        .$data["email"]."','"
        .$data["data_nascimento"]."','"
        .$data["telefone"]."','"
        .$data["senha"]."')";

        $result = $conn->query($sql);
        
        if ($result->rowCount() > 0) {
           echo json_encode(["result" => 201]);// realizou as mudanças
        }else{
            echo json_encode(["result" => 200]); //está ok mas não fez musdanças
        }

                    

    } catch (PDOException $err) {
        echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
    }

?>