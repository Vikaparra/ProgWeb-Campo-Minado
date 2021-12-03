<?php

    $serverName = "localhost";
    $username   = "root";
    $password   = "";

    try {
        $conn = new PDO("mysql:host=$serverName;dbname=progweb", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $data = json_decode(file_get_contents('php://input'), true);
        
        $statement = $conn->query("SELECT * FROM user WHERE id_user = 1");
        $row = $statement->fetch(PDO::FETCH_ASSOC);
        if ($row == ""){
            echo "<script language=’javascript’ type=’text/javascript’>alert(‘Não foi possível cadastrar esse usuário’);</script>";
        }
        echo json_encode($row); 


        // $result = $conn->exec("
        //     INSERT INTO user 
        //     SET 
        //     nome = '".$data["nome"]."',
        //     data_nascimento = '".$data["data_nascimento"]."',
        //     telefone = '".$data["telefone"]."',
        //     email = '".$data["email"]."',
        //     senha = '".$data["senha"]."'
        //     WHERE id_user = ".$data["id_user"]."
        // ");
        
        // if ($result > 0) {
        //     echo json_encode(["result" => 201]);// realizou as mudanças
        // }else{
        //     echo json_encode(["result" => 200]); //está ok mas não fez musdanças
        // }

                    

    } catch (PDOException $err) {
        echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
    }

?>