<?php

    include("./conexao.php");

    $id_partida = $_POST['id_partida'];
    $id_jogador = $_POST['campo_nome'];
    $dimensoes = $_POST['quantity'];
    $numero_bombas = $_POST['myRange'];
    $modalidade = $_POST['modo_jogo'];
    $tempo_gasto = $_POST['time'];
    $resultado = $_POST['resultado'];
    $data_hora = $_POST['data_hora'];
    $pontos_partida = $_POST['pontos_partida'];

    $valor = $conn -> exec("INSERT into partida(id_partida, id_jogador, dimensoes, numero_bombas, modalidade, tempo_gasto, resultado, data_hora, pontos_partida) VALUES ($id_partida '$id_jogador', $dimensoes, $numero_bombas, $modalidade, $tempo_gasto, $resultado, '$data_hora', $pontos_partida)";

if($valor == 1){
    echo json_encode(array("resposta" => 1));
}else{
    echo json_encode(array("resposta" => 0));
}

?>
