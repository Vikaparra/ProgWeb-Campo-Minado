"use strict";

var tabuleiro = sessionStorage.getItem("tabuleiro");
    tabuleiro = JSON.parse(tabuleiro);
    console.log(tabuleiro)

// export class Tabuleiro {Tabuleiro}

//  var tabuleiro = document.createElement('script');
//  tabuleiro.src = '../View/screens/configuracoes/configuracoes.js';
//  document.head.appendChild(tabuleiro); // Importado JS do jogador

//Função para saber quantas bombas há perto da célula



//Função para verificar a celula no momento do clique
function clique(tabuleiro, linha, coluna){

    let celula = tabuleiro.matriz[linha][coluna];

    switch (celula) {
        case 0: //se a célula não tiver bombas (nela e perto)
            //roda função recursiva pra abrir tudo que for 0 em volta
            // tabuleiro.celulasAbertas++;
            celulasZero(tabuleiro, linha, coluna);
            if(tabuleiro.celulasAbertas==tabuleiro.celulasSb){
                fimDeJogo("V");
            }
             console.log("clique: "+tabuleiro.celulasAbertas);
            break;

        case "B": //se a célula tiver bomba (nela)
            fimDeJogo("D"); 
            break;

        default: //se a célula tiver bombas (perto)
            //so mostra normalmente o valor
            //bloqueia no html pra nao poder clicar mais
            if(document.getElementById(idStringfy(linha, coluna)).style.backgroundColor == "lightsteelblue"){
                return
            }else{
                let elemento = document.getElementById(idStringfy(linha, coluna));
                elemento.style = "background-color:LightSteelBlue;";
                elemento.innerHTML = ("<p>" + celula + "</p>");
            }
     
            
            tabuleiro.celulasAbertas++;
            console.log("clique: "+tabuleiro.celulasAbertas);       
            if(tabuleiro.celulasAbertas==tabuleiro.celulasSb){
                fimDeJogo("V");
            }
            break;
    }

    console.log(tabuleiro.matriz)

}

//Função para abrir celulas vizinhas da celula vazia
function celulasZero(tabuleiro, linha, coluna){
    for(let colunas=coluna-1; colunas <= (coluna+1); colunas++){
        for(let linhas=linha-1; linhas <= (linha+1); linhas++){
            if(colunas >= 0 && linhas >= 0 && colunas < tabuleiro.numeroCelulas && linhas < tabuleiro.numeroCelulas){
                if(tabuleiro.matriz[linhas][colunas]===0){
                    console.log("recursiva: "+tabuleiro.celulasAbertas);
                    console.log("linha/coluna: "+linhas+"|"+colunas);
                    // console.log("linhas"+linhas);
                    // console.log("-------------------------");
                    tabuleiro.matriz[linhas][colunas]=-1;
                    document.getElementById(idStringfy(linhas, colunas)).style = "background-color:lightsteelblue;";
                    

                    //mostra a casa e chama a função novamente
                    //bloqueia no html pra nao clicar mais ---> style.pointerEvents = 'none';
                    tabuleiro.celulasAbertas++;
                    celulasZero(tabuleiro, linhas, colunas); //rodando de novo para abrir todas que são 0 em volta
                }
                else if(tabuleiro.matriz[linhas][colunas]=="B"){
                    // tabuleiro.celulasAbertas++;
                    return "B"; //mostra célula fechada
                }
                else {

                    if(tabuleiro.matriz[linhas][colunas] > 0 && document.getElementById(idStringfy(linhas, colunas)).style.backgroundColor != "lightsteelblue")
                        {
                            document.getElementById(idStringfy(linhas, colunas)).style = "background-color:lightsteelblue;";
                            let elemento = document.getElementById(idStringfy(linhas, colunas));
                            elemento.innerHTML = ("<p>" + tabuleiro.matriz[linhas][colunas] + "</p>");
                            console.log("normal: "+tabuleiro.celulasAbertas);
                            console.log("linha/coluna: "+linhas+"|"+colunas);
                            tabuleiro.celulasAbertas++;
                        }

                    //mostra o valor e para
                    //bloqueia pra nao clicar mais
                }
            }  
        }
    }
}

function fimDeJogo(resultado){ //parâmetro de vitória ou derrota p/ definir display
    //bloquear tudo pra não clicar
    //tornar display de "vitória" ou "derrota" visível
    if(resultado=="D"){
        derrotaGUIEvent();
        //display DIV de derrota
    }
    else {
        window.alert("GANHOU CREMOSO");
        //display DIV de vitória
    }
}

// Parte do Tabuleiro para testes


function idStringfy(linha, coluna){
    if(linha < 10){
        if(coluna < 10){
            return ("0" + linha + "0" + coluna);
        }else{
            return ("0" + linha + "" + coluna);
        }
    }else{ 
        if(coluna < 10){
            return (linha + "0" + coluna);
        }else{
            return ("" + linha + "" + coluna);
        }
    }
}

function idParse(idElement){
    let linha = parseInt(idElement.substr(0,2));
    let coluna = parseInt(idElement.substr(2,3));

    return { linha, coluna };
}

//VIEW   
function buildGridLayout(){

    console.log(tabuleiro.matriz)

    let matriz = tabuleiro.matriz;

    var divMatriz = document.querySelector("#container-principal section");
    var matrizGUI = document.createElement("div");
    matrizGUI.className = "matriz-GUI";
    matrizGUI.style = ("display: grid; grid-template-columns: repeat(" + matriz.length + ", 1fr);grid-template-rows: repeat(" + matriz.length + ", 1fr);");

    divMatriz.appendChild(matrizGUI);

    let linhaM = -1;
    let colunaM = -1;

    matriz.forEach(linha => {
        linhaM++;
        linha.forEach(() => {
            colunaM++;
            var celulaMatrizGUI = document.createElement("div");
            celulaMatrizGUI.className = "celula-matriz-GUI";
            celulaMatrizGUI.id = idStringfy(linhaM, colunaM);
            let { linha, coluna } = idParse(celulaMatrizGUI.id);
            celulaMatrizGUI.addEventListener("click", function(){clique(tabuleiro, linha, coluna)}) ;
            
         
            matrizGUI.appendChild(celulaMatrizGUI);
        });
        colunaM = -1;
    });

}

// function fazerJogada(idElement){
//     let { linha, coluna } = idParse(idElement);
//     clique(linha, coluna);

//     var matriz = tabuleiro.matriz;

//     for(let i=0; i < matriz.length; i++){
//         for(let j=0; j < matriz[0].length; j++){
//             if(matriz[i][j] == -1){
                
//             }else if(matriz[linha][coluna] == "B"){
                
//         }
//     }
//     }

// }

function trapaca(){

    let matriz = tabuleiro.matriz;

    for(let i=0; i < matriz.length; i++){
        for(let j=0; j < matriz[0].length; j++){
           if(matriz[i][j] == "B"){
                document.getElementById(idStringfy(i, j)).style = "background-color:red;";
                document.getElementById(idStringfy(i, j)).innerHTML = ("<img id='bombastrapaca' src='../../../View/shared/imgs/Bomba/bombear1.png'>");
            }
        }
    }

    setTimeout(()=>{
        for(let i=0; i < matriz.length; i++){
            for(let j=0; j < matriz[0].length; j++){
               if(matriz[i][j] == "B"){
                    document.getElementById(idStringfy(i, j)).style = "background-color:white;";
                    document.getElementById(idStringfy(i, j)).innerHTML = "";
                }
        }
        }
    }, 3000);
}




function derrotaGUIEvent(){
    let tabuleiroGUI = document.querySelector("#container-principal section");
    let overlayTela = document.createElement("div");
    overlayTela.style = ("width: "+ (tabuleiroGUI.getBoundingClientRect().width - 60) + "px; height: "+ (tabuleiroGUI.getBoundingClientRect().height - 60) +"px; background-color: white; position:absolute; index: 400; display: flex; flex-direction: column; align-items: center; justify-content: space-around;");
    tabuleiroGUI.appendChild(overlayTela);


    // var overlayTela = document.createElement("div");
    // overlayTela.style = "";
    // overlayTela.appendChild(overlayTela);

    var textoFimDeJogo = document.createElement("h1");
    textoFimDeJogo.innerText = "FIM DE JOGO!";
    textoFimDeJogo.style = "color: var(--velvet)";
    overlayTela.appendChild(textoFimDeJogo);

    var divTempPontos = document.createElement("div");
    divTempPontos.style = "display: flex; flex-direction: column; align-items: center; justify-content: space-around; height: 10em; color: black;";
    overlayTela.appendChild(divTempPontos);

    var tempoFinal = document.createElement("h2");
    tempoFinal.innerText = "00:00";
    divTempPontos.appendChild(tempoFinal);
    var pontuacao = document.createElement("h3");
    pontuacao.innerText = ("PONTUACAO: " + 3);
    divTempPontos.appendChild(pontuacao);

    var divButtons = document.createElement("div");
    divButtons.style = "display: flex; flex-direction: column; justify-content: space-around; align-items: center; height: 15em;";
    overlayTela.appendChild(divButtons);

    var jogarNovementeBtn = document.createElement("button");
    jogarNovementeBtn.innerText = "JOGAR DE NOVO";
    jogarNovementeBtn.className = "general-button";
    jogarNovementeBtn.addEventListener("click", ()=> {
        
        sessionStorage.setItem("tabuleiro", JSON.stringify(new Tabuleiro(tabuleiro.numeroCelulas,tabuleiro.numeroBombas, tabuleiro.modoJogo)))
        document.location.reload(true);
    });
    divButtons.appendChild(jogarNovementeBtn);

    var sairBtn = document.createElement("button");
    sairBtn.innerHTML = "SAIR";
    sairBtn.style = "color: var(--velvet)"
    sairBtn.className = "general-button";
    sairBtn.addEventListener("click", ()=> document.location.href = "../../screens/configuracoes/configs.html");
    divButtons.appendChild(sairBtn);

}

function startTimer(duracao, display){
    var timer = duracao;
    var minutos;
    var segundos;

    setInterval(()=>{
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(minutos % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
    })
}