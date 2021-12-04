<?php
    $sname = "localhost";
    // $uname = "root";
    // $pwd = "";
    
    // Nosso novo banco de dados
    $bd = "progWeb";
    $conexao_pdo = null; // Nossa conexão PDO

    // Cria o banco de dados e da permissão para nosso usuário no mesmo
    $verifica = $conexao_pdo->exec(
    "CREATE DATABASE IF NOT EXISTS `$bd`;
    GRANT ALL ON `$bd`.* TO 'k'@'localhost';
    FLUSH PRIVILEGES;"
);
    // Verificamos se a base de dados foi criada com sucesso
    if ( $verifica ) {
        echo 'Banco de dados criado com sucesso!';
    } else {
        echo 'Falha ao criar banco de dados!';
    }
    
    //--------------------------
    
    try {
        $conn = new PDO("mysql:host=$sname;dbname=progWeb");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    }
    catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }
    
    try {
        $sql = "CREATE TABLE user(
            id_user INT NOT NULL,
            username VARCHAR(50) NOT NULL,
            nome_user TEXT(255) NOT NULL,
            cpf VARCHAR(11) NOT NULL,
            email VARCHAR(255) NOT NULL,
            data_nascimento DATE NOT NULL,
            telefone VARCHAR(11) NOT NULL, 
            senha VARCHAR(100) NOT NULL,
            PRIMARY KEY (id_user),
            UNIQUE (username),
            UNIQUE (cpf)
        )";
        $conn->exec($sql);
    }
    catch(PDOException $e){
        echo "Ocorreu um erro: " . $e->getMessage();
    }

    try {
        $sql = "CREATE TABLE partida(
            id_partida INT NOT NULL,
            id_jogador INT NOT NULL,
            dimensoes INT NOT NULL,
            numero_bombas INT NOT NULL,
            modalidade BIT,
            tempo_gasto INT,
            resultado BIT,
            data_hora DATETIME,
            pontos_partida INT,
            PRIMARY KEY (id_partida),
            FOREIGN KEY (id_jogador) REFERENCES user (id_user)
        )";
        $conn->exec($sql);
    }
    catch(PDOException $e){
        echo "Ocorreu um erro: " . $e->getMessage();
    }
?>