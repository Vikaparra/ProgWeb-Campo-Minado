<?php

    require('sessao.php');

    $serverName = "localhost";
    $username   = "root";
    $password   = "";

    try {
        $data = json_decode(file_get_contents('php://input'), true); //recebendo o que foi enviado do formulario
        $conn = new PDO("mysql:host=$serverName;dbname=progweb", "root", ""); //abrindo conexão com o banco de dados
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if (isset($data["username"])){

            $sql = "INSERT INTO user (username, nome_user, cpf, email, data_nascimento, telefone, senha) VALUES (?,?,?,?,?,?,?)"; //criação da query
            $execucao = $conn->prepare($sql); // Prepara para execução      
            $resultado = $execucao->execute([ // Executa as instruções
                $data["username"], 
                $data["nome"], 
                $data["cpf"], 
                $data["email"], 
                $data["data_nascimento"], 
                $data["telefone"], 
                $data["senha"]
            ]);
            
            if ($resultado > 0) {
                iniciarSessao($data);
                echo json_encode(["result" => 201]);// cadastrou normalmente
            }else{
                echo json_encode(["result" => 200]); // não cadastrou
            }

        }
                
    } catch (PDOException $err) {
        echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
    }

?>