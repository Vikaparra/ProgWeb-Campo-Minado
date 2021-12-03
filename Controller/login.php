<?php	
	$serverName = "localhost";
    $username   = "root";
    $password   = "";
    
    try {
        $conn = mysqli_connect("mysql:host=$serverName;dbname=progweb", $username, $password); //abre conexão com bd

        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $senha = mysqli_real_escape_string($conn, md5($_POST['senha'])); //hash da senha
        $entrar = $_POST['entrar_login'];

        if (isset($entrar)) {

            $query = "SELECT * FROM user WHERE email = '{$email}' AND senha = md5('{$senha}')";
            $result = mysqli_query($conn, $query);
            $row = mysqli_num_rows($result);

            if ($row<=0){
                echo"<script language='javascript' type='text/javascript'>
                alert('Login e/ou senha incorretos');window.location
                .href='login.html';</script>";
                die();
            } else {
                //sessão
            }
        }      

    } catch (PDOException $err) {
        echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
    }

?>