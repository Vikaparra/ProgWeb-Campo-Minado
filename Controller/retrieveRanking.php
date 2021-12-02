<?php

$serverName = "localhost";
$username   = "root";
$password   = "";

try {
    $conn = new PDO("mysql:host=$serverName;dbname=progweb", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // $statement = $conn->query("SELECT * FROM partida WHERE resultado=1 ORDER BY dimensoes desc, tempo_gasto asc LIMIT 10");

     $statement = $conn->query("SELECT user.nome, dimensoes, numero_bombas, modalidade, tempo_gasto, resultado, data_hora 
     FROM partida INNER JOIN user 
     ON (id_user = id_jogador AND resultado = 1)
     ORDER BY dimensoes desc, tempo_gasto asc");
    
    $partidas = [];

    while($row = $statement->fetch(PDO::FETCH_ASSOC)){
        array_push($partidas, $row);
    }

    $melhoresPartidas = [];
    $nomesAvaliados = [];

    foreach (array_values($partidas) as $i => $value) {
        if(!in_array($partidas[$i]["nome"], $nomesAvaliados)){
            array_push($melhoresPartidas, $partidas[$i]);
            array_push($nomesAvaliados, $partidas[$i]["nome"]);
        }

        if(count($nomesAvaliados) > 10){
            break;
        }
    }

   echo json_encode($melhoresPartidas);      

} catch (PDOException $err) {
    echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
}

?>