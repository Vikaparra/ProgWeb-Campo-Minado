// function loadData(){
//     fetch("../../../Controller/perfil.php")
//     .then(response => response.json())
//     .then(data => insertDataOnFields(data))
//     .catch(error => JSON.parse(JSON.stringify(error)))
// }


function cadastro(id){

    var name = document.getElementById("campo_nome");
    var dataNasc = document.getElementById("campo_datanasc");
    var cpf = document.getElementById("campo_cpf");
    var telefone = document.getElementById("campo_telefone");
    if(!((/[0-9]{2}9[0-9]{8}/).test(String(telefone.value))) || telefone.value.length > 11){
        window.alert("Insira um número de telefone válido");
        return ;
    }
    var email = document.getElementById("campo_email");
    if(!((/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/).test(String(email.value)))){
        window.alert("Insira um email válido");
        return ;
    }
    var username = document.getElementById("campo_username");
    if(!((/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/).test(String(email.value)))){
        window.alert("Insira um email válido");
        return ;
    }
    var password = document.getElementById("campo_senha");
    var confirmPassword = document.getElementById("campo_confsenha");

    if(password.value != confirmPassword.value){
        window.alert("Senhas diferentes. Insira duas senhas iguais para confirmarmos que foi sua escolha");
        return ;
    }


    fetch("../../../Controller/cadastro.php", {
        method: "POST",
        body: JSON.stringify({
            "nome" : name.value,
            "data_nascimento" : dataNasc.value,
            "cpf" : cpf.value,
            "telefone" : telefone.value,
            "email" : email.value,
            "username" : username.value,
            "senha" : password.value
        })
    })
    .then(response => response.json())
    .then(answer => {
        if(answer["result"] > 200){
            window.alert("Usuario cadastrado com sucesso!");
            location.href = ("../tela_menu_principal/tela_menu_principal.php");
        }else{
            window.alert("Um erro ocorreu. Certifique-se de que ja não está cadastrado");
        }
    })
    .catch(error => console.log(error));

}

document.getElementById("continuar_cadastro").addEventListener("click", cadastro);

document.getElementById("voltar_cadastro").onclick = function() {
    location.href = ("../inicial/inicial.html");
};