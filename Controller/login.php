<?php	

    require "./sessao.php";

	$serverName = "localhost";
    $username   = "root";
    $password   = "";
    $dbname = "progweb";
    
    try {
        $conn = mysqli_connect($serverName, $username, $password); //abre conexão com bd
        mysqli_select_db($conn, $dbname);

         $email = mysqli_real_escape_string($conn, $_POST['email']);
         $senha = mysqli_real_escape_string($conn, $_POST['senha']); //hash da senha
        $entrar = $_POST['entrar_login'];

        if (isset($entrar)) {

            $query = "SELECT * FROM user WHERE email = '{$email}' AND senha = '{$senha}'";
            $result = mysqli_query($conn, $query);
            $row = mysqli_num_rows($result);

            if ($row<=0){
                echo"<script language='javascript' type='text/javascript'>
                alert('Login e/ou senha incorretos');window.location
                .href='../View/screens/login/login.html';</script>";
                die();
            } else {
                $myarr = mysqli_fetch_array($result, MYSQLI_BOTH);
                iniciarSessao(["nome" => $myarr["nome_user"], "username" => $myarr["username"]]);
                Header('Location: '."../View/screens/tela_menu_principal/tela_menu_principal.php");
            }
        }      

    } catch (PDOException $err) {
        echo json_encode(["error" => "conexão falhou: ". $err->getMessage()]);
    }

?>