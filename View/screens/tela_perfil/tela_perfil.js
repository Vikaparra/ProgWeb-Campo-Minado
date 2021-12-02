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
    
    name.value = userData.nome; 
    dataNasc.value = userData.data_nascimento; 
    cpf.value = userData.cpf; 
    telefone.value = userData.telefone; 
    email.value = userData.email; 
    username.value = userData.username;

}

function updateData(id){

    var name = document.getElementById("campo_nome_perfil");
    var dataNasc = document.getElementById("campo_datanasc_perfil");
    var cpf = document.getElementById("campo_cpf_perfil");  
    var telefone = document.getElementById("campo_telefone_perfil");
    var email = document.getElementById("campo_email_perfil");
    var username = document.getElementById("campo_username_perfil");

    fetch("../../../Controller/updatePerfil.php", {
        method: "POST",
        body: JSON.stringify({
            "id_user" : 1,
            "nome" : name.value,
            "data_nascimento" : dataNasc.value,
            "cpf" : cpf.value,
            "telefone" : telefone.value,
            "email" : email.value,
            "username" : username.value
        })
    })
    .then(response => response.json())
    .then(answer => console.log(answer))
    .catch(error => console.log(error))
}

document.getElementById("salvar_perfil").addEventListener("click", updateData);