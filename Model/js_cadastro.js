function salvarForm(){
    if(typeof(Storage) !== "undefined") {

        if(localStorage.cont){
            localStorage.cont = Number(localStorage.cont)+1;
        }else{
            localStorage.cont = 1;
        }

        cad = document.getElementById('campo_nome').value + '; ' + document.getElementById('campo_datanasc').value + '; ' + document.getElementById('campo_cpf').value + '; ' + document.getElementById('campo_telefone').value + '; ' + document.getElementById('campo_email').value + '; ' + document.getElementById('campo_username').value + '; ' + document.getElementById('campo_senha').value + '; ' + document.getElementById('campo_confsenha').value  
        localStorage.setItem("Cadastro número" + " " + localStorage.cont,cad);

    }else{
        
    }
}

function sequenciaContinua(){
    document.getElementById("continuar_cadastro").onclick = function() {
        location.href = ("../tela_menu_principal/tela_menu_principal.html");
    };

}