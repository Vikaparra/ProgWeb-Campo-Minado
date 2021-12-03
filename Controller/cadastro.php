<?php

    $serverName = "localhost";
    $username   = "root";
    $password   = "";

    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $conn = new PDO("mysql:host=$serverName;dbname=progweb", "root", "");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if (isset($data["username"])){

            $sql = "INSERT INTO user (username, nome_user, cpf, email, data_nascimento, telefone, senha) VALUES (?,?,?,?,?,?,?)";
            $result= $conn->prepare($sql);
            $resultado = $result->execute([$data["username"], $data["nome"], $data["cpf"], $data["email"], $data["data_nascimento"], $data["telefone"], $data["senha"]]);
            
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