<?php
$serverName = "localhost";
$username   = "root";
$password   = "";

try {

    session_start();

    $conn = new PDO("mysql:host=$serverName;dbname=progweb", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    /*
    "conexão falhou: SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '0' for key 'PRIMARY'"
    */
    $data = json_decode(file_get_contents('php://input'), true);

    // $id_partida = $_POST['id_partida'];
    // $id_jogador = $_POST['campo_nome'];
    $dimensoes = $data['numeroBombas'];
    $numero_bombas = $data['numeroCelulas'];
    $modalidade = $data['modoJogo'];
    $tempo_gasto = $data['tempo'];
    $resultado = $data['resultadoPartida'];
    $data_hora = $data['data_hora'];
    $pontos_partida = $data['pontos_partida'];

    // $valor = $conn->exec("INSERT INTO partida(id_jogador, dimensoes, numero_bombas, modalidade, tempo_gasto, resultado, data_hora, pontos_partida) VALUES ('".$id_jogador."', '".$dimensoes."', '".$numero_bombas."', '".$modalidade."', '".$tempo_gasto."', '".$resultado."', '2002-11-26', '".$pontos_partida."'");

    $statement = $conn->query("SELECT id_user FROM user WHERE username = '".$_SESSION["username"]."'");
    
    $id_user = $statement->fetch(PDO::FETCH_ASSOC)["id_user"];

    $sql = "INSERT INTO partida(id_jogador, dimensoes, numero_bombas, modalidade, tempo_gasto, resultado, data_hora, pontos_partida) VALUES (?,?,?,?,?,?,?,?)";

    $execucao = $conn->prepare($sql);
            $valor = $execucao->execute([
                $id_user,
                $dimensoes,
                $numero_bombas,
                $modalidade,
                $tempo_gasto,
                $resultado,
                $data_hora,
                $pontos_partida
            ]);

    if($valor == 1){
        echo json_encode(array("resposta" => 1));
    }else{
        echo json_encode(array("resposta" => 0));
    }                 

} catch (PDOException $err) {
    echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
}


?>