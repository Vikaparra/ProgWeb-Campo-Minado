<?php

    $serverName = "localhost";
    $username   = "root";
    $password   = "";

    try {
        $data = json_decode(file_get_contents('php://input'), true); //recebendo o que foi enviado do formulario
        $conn = new PDO("mysql:host=$serverName;dbname=progweb", "root", ""); //abrindo conexão com o banco de dados
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if (isset($_SESSION["username"])){
            
            $statement = $conn->query("SELECT * 
            FROM user WHERE username = ".$_SESSION['username']."
            ORDER BY data_hora");
        
        $partidas = [];
    
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            array_push($partidas, $row);
        }
    
        echo json_encode($partidas);

        }
                
    } catch (PDOException $err) {
        echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
    }

?>