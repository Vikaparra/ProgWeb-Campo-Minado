<?php

    session_start();
    $serverName = "localhost";
    $username   = "root";
    $password   = "";

    try {
       
        $conn = new PDO("mysql:host=$serverName;dbname=progweb", "root", ""); //abrindo conexão com o banco de dados
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
            $statement = $conn->query("SELECT * 
            FROM user u INNER JOIN partida p
            ON u.id_user = p.id_jogador
            WHERE u.username = '".$_SESSION['username']."'
            ORDER BY 'data_hora'"); // Realizando o select com base no username definido na sessão
        
        $partidas = [];
            
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            array_push($partidas, $row); // Colocando todas as partidas que vieram na query em um array
        }
    
        echo json_encode($partidas); // Retornando o array com as partidas
                
    } catch (PDOException $err) {
        echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
    }

?>