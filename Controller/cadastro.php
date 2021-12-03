<?php

    $serverName = "localhost";
    $username   = "root";
    $password   = "";

    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $conn = new PDO("mysql:host=$serverName;dbname=progweb", "root", "");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



        // $arrays = [
        //     "id_user" => $data["id_user"],
        //     "nome" => $data["nome"],
        //     "data_nascimento" => $data["data_nascimento"],
        //     "cpf" => $data["cpf"],
        //     "telefone" => $data["telefone"],
        //     "email" => $data["email"],
        //     "username" => $data["username"],
        //     "senha" => $data["senha"]
        // ];

        // $sql = "INSERT INTO user (id_user, username, nome_user, cpf, email, data_nascimento, telefone, senha)  VALUES (:id_user, :username, :nome, :cpf, :email, :data_nascimento, :telefone, :senha)";
        // $resultado = $conn->prepare($sql);
        // $result = $resultado->execute($arrays)->rowCount();



        // $sql = "INSERT INTO user (id_user, username, nome_user, cpf, email, data_nascimento, telefone, senha) VALUES ("
        // .$data["id_user"]." , '"
        // .$data["username"]."','"
        // .$data["nome"]."','"
        // .$data["cpf"]."','"
        // .$data["email"]."','"
        // .$data["data_nascimento"]."','"
        // .$data["telefone"]."','"
        // .$data["senha"]."')";
        // $result = $conn->query($sql)->rowCount();
        // $result = $conn->query("INSERT INTO user VALUES ( 25,
        // 'vikav25i','vika parra','98725625857','vika@gmail.com','01-09-1999','19997284878','12332199')"
        // )->rowCount();



        // $sql = "INSERT INTO user (id_user, username, nome_user, cpf, email, data_nascimento, telefone, senha) VALUES ("
        // .$data["id_user"]." , '"
        // .$data["username"]."','"
        // .$data["nome"]."','"
        // .$data["cpf"]."','"
        // .$data["email"]."','"
        // .$data["data_nascimento"]."','"
        // .$data["telefone"]."','"
        // .$data["senha"]."')";
        // $result = $conn->query($sql)->rowCount();



        $sql = "INSERT INTO user (id_user, username, nome_user, cpf, email, data_nascimento, telefone, senha) VALUES (?,?,?,?,?,?,?,?)";
        $result= $conn->prepare($sql);
        $resultado = $result->execute([$data["id_user"], $data["username"], $data["nome"], $data["cpf"], $data["email"], $data["data_nascimento"], $data["telefone"], $data["senha"]]);
        if ($resultado > 0) {
           echo json_encode(["result" => 201]);// realizou as mudanças
        }else{
            echo json_encode(["result" => 200]); //está ok mas não fez musdanças
        }

                    

    } catch (PDOException $err) {
        echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
    }

?>