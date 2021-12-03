function loadData(){
    fetch("../../../Controller/perfil.php")
    .then(response => response.json())
    .then(data => insertDataOnFields(data))
    .catch(error => JSON.parse(JSON.stringify(error)))
}

function insertDataOnFields(userData){
    var name = document.getElementById("campo_nome_perfil");
    var dataNasc = document.getElementById("campo_datanasc_perfil");
    var cpf = document.getElementById("campo_cpf_perfil");  
    var telefone = document.getElementById("campo_telefone_perfil");
    var email = document.getElementById("campo_email_perfil");
    var username = document.getElementById("campo_username_perfil");
    var password = document.getElementById("campo_senha_perfil");
    var confirmPassword = document.getElementById("campo_confsenha_perfil");
    
    name.value = userData.nome_user; 
    dataNasc.value = userData.data_nascimento; 
    cpf.value = userData.cpf; 
    telefone.value = userData.telefone; 
    email.value = userData.email; 
    username.value = userData.username;
    password.value = userData.senha
    confirmPassword.value = userData.senha;

    console.log(userData)
}

function updateData(id){

    var name = document.getElementById("campo_nome_perfil");
    var dataNasc = document.getElementById("campo_datanasc_perfil");
    var telefone = document.getElementById("campo_telefone_perfil");
    if(!((/[0-9]{2}9[0-9]{8}/).test(String(telefone.value))) || telefone.value.length > 11){
        window.alert("Insira um número de telefone válido");
        return ;
    }
    var email = document.getElementById("campo_email_perfil");
    if(!((/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/).test(String(email.value)))){
        window.alert("Insira um email válido");
        return ;
    }
    var password = document.getElementById("campo_senha_perfil");
    var confirmPassword = document.getElementById("campo_confsenha_perfil");

    if(password.value != confirmPassword.value){
        window.alert("Senhas diferentes. Insira duas senhas iguais para confirmarmos que foi sua escolha");
        return ;
    }

    fetch("../../../Controller/updatePerfil.php", {
        method: "POST",
        body: JSON.stringify({
            "id_user" : 1,
            "nome_user" : name.value,
            "data_nascimento" : dataNasc.value,
            "telefone" : telefone.value,
            "email" : email.value,
            "senha" : password.value
        })
    })
    .then(response => response.json())
    .then(answer => {
        if(answer["result"] >= 200){
            location.href = ("../tela_menu_principal/tela_menu_principal.html");
        }else{
            window.alert("Um erro ocorreu. Tente novamente mais tarde");
        }
    })
    .catch(error => console.log(error));


}

document.getElementById("salvar_perfil").addEventListener("click", updateData);