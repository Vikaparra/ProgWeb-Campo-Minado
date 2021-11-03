"use strict";

var tabuleiro = sessionStorage.getItem("tabuleiro");
    tabuleiro = JSON.parse(tabuleiro);

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
            celulasZero(tabuleiro, linha, coluna);
            if(tabuleiro.celulasAbertas==tabuleiro.celulasSb){
                fimDeJogo("V");
            }
            break;

        case "B": //se a célula tiver bomba (nela)
            fimDeJogo("D"); 
            break;

        default: //se a célula tiver bombas (perto)
            //so mostra normalmente o valor
            //bloqueia no html pra nao poder clicar mais
            if(document.getElementById(idStringfy(linha, coluna)).style.backgroundColor == "red"){
                return
            }else{
                let elemento = document.getElementById(idStringfy(linha, coluna));
                elemento.style = "background-color:red;";
                elemento.innerHTML = ("<p>" + celula + "</p>");
            }
            
            
            
            tabuleiro.celulasAbertas++;
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
                    // console.log("colunas"+colunas);
                    // console.log("linhas"+linhas);
                    // console.log("-------------------------");
                    
                    document.getElementById(idStringfy(linhas, colunas)).style = "background-color:red;";
                    
                    tabuleiro.matriz[linhas][colunas]=-1;
                    //mostra a casa e chama a função novamente
                    //bloqueia no html pra nao clicar mais ---> style.pointerEvents = 'none';
                    tabuleiro.celulasAbertas++;
                    celulasZero(tabuleiro, linhas, colunas); //rodando de novo para abrir todas que são 0 em volta
                }
                else if(tabuleiro.matriz[linhas][colunas]=="B"){
                    tabuleiro.celulasAbertas++;
                    return "B"; //mostra célula fechada
                }
                else {
                    document.getElementById(idStringfy(linhas, colunas)).style = "background-color:red;";

                    if(tabuleiro.matriz[linhas][colunas] > 0)
                        {
                            let elemento = document.getElementById(idStringfy(linhas, colunas));
                            elemento.innerHTML = ("<p>" + tabuleiro.matriz[linhas][colunas] + "</p>");
                            
                        }
                    tabuleiro.celulasAbertas++;
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
        window.alert("PERDEU OTARIO");
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
                document.getElementById(idStringfy(i, j)).style = "background-color:blue;";
        }
    }
    }

    setTimeout(()=>{
        for(let i=0; i < matriz.length; i++){
            for(let j=0; j < matriz[0].length; j++){
               if(matriz[i][j] == "B"){
                    document.getElementById(idStringfy(i, j)).style = "background-color:yellow;";
            }
        }
        }
    }, 3000);
}