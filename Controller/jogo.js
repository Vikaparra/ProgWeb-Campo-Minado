"use strict";

var tabuleiro = sessionStorage.getItem("tabuleiro");
    tabuleiro = JSON.parse(tabuleiro);

//Função para verificar a celula no momento do clique
function clique(tabuleiro, linha, coluna){

    let celula = tabuleiro.matriz[linha][coluna];
    var numCelulasAbertasGUI = document.querySelector("#celulas-abertas");
    switch (celula) {
        case 0: //se a célula não tiver bombas (nela e perto)
            //roda função recursiva pra abrir tudo que for 0 em volta
            celulasZero(tabuleiro, linha, coluna);
            numCelulasAbertasGUI.innerText = ("Celulas Abertas: " + tabuleiro.celulasAbertas);
            if(tabuleiro.celulasAbertas==tabuleiro.celulasSb){
                fimDeJogo("V");
            }
            break;

        case "B": //se a célula tiver bomba (nela)
            fimDeJogo("D"); 
            break;

        default: //se a célula tiver bombas (perto)
            //mostra normalmente o valor e bloqueia no html para nao poder clicar mais
            if(document.getElementById(idStringfy(linha, coluna)).style.backgroundColor == "lightsteelblue"){ //verifica se ja foi clicada
                return
            }else{
                let elemento = document.getElementById(idStringfy(linha, coluna));
                elemento.style = "background-color:LightSteelBlue;";
                elemento.innerHTML = ("<p>" + celula + "</p>");
            }
            tabuleiro.celulasAbertas++;  
            numCelulasAbertasGUI.innerText = ("Celulas Abertas: " + tabuleiro.celulasAbertas); //mostra no tabuleiro 
            if(tabuleiro.celulasAbertas==tabuleiro.celulasSb){
                fimDeJogo("V");
            }
            break;
    }


}

//Função para abrir celulas vizinhas da celula vazia
function celulasZero(tabuleiro, linha, coluna){
    for(let colunas=coluna-1; colunas <= (coluna+1); colunas++){
        for(let linhas=linha-1; linhas <= (linha+1); linhas++){
            if(colunas >= 0 && linhas >= 0 && colunas < tabuleiro.numeroCelulas && linhas < tabuleiro.numeroCelulas){
                if(tabuleiro.matriz[linhas][colunas]===0){
                    tabuleiro.matriz[linhas][colunas]=-1;
                    //mostra a casa como clicada e chama a função novamente
                    document.getElementById(idStringfy(linhas, colunas)).style = "background-color:lightsteelblue;";

                    tabuleiro.celulasAbertas++;

                    celulasZero(tabuleiro, linhas, colunas); //rodando de novo para abrir todas que são 0 em volta
                }
                else if(tabuleiro.matriz[linhas][colunas]=="B"){
                    return "B"; //célula permanece fechada
                }
                else {
                    if(tabuleiro.matriz[linhas][colunas] > 0 && document.getElementById(idStringfy(linhas, colunas)).style.backgroundColor != "lightsteelblue"){
                            //mostra o valor e para  
                            document.getElementById(idStringfy(linhas, colunas)).style = "background-color:lightsteelblue;";
                            let elemento = document.getElementById(idStringfy(linhas, colunas));
                            elemento.innerHTML = ("<p>" + tabuleiro.matriz[linhas][colunas] + "</p>");
                            
                            tabuleiro.celulasAbertas++;
                        }
                }
            }  
        }
    }
}

function fimDeJogo(resultado){ //parâmetro de vitória ou derrota p/ definir display
    if(resultado=="D"){
        fimDeJogoGUIEvent(0);
        //display DIV de derrota
    }
    else {
        fimDeJogoGUIEvent(1);
        //display DIV de vitória
    }
}

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

function fimDeJogoGUIEvent(resultado){
    
    var titulo = resultado == 0 ? "FIM DE JOGO" : "VITORIA!!";

    let tabuleiroGUI = document.querySelector("#container-principal section");
    let overlayTela = document.createElement("div");
    overlayTela.style = ("width: "+ (tabuleiroGUI.getBoundingClientRect().width - 60) + "px; height: "+ (tabuleiroGUI.getBoundingClientRect().height - 60) +"px; background-color: white; position:absolute; index: 400; display: flex; flex-direction: column; align-items: center; justify-content: space-around;");
    tabuleiroGUI.appendChild(overlayTela);

    var textoFimDeJogo = document.createElement("h1");
    textoFimDeJogo.innerText = titulo;
    textoFimDeJogo.style = "color: var(--velvet); font-size:30px";
    overlayTela.appendChild(textoFimDeJogo);

    var pontuacao = document.createElement("h3");
    pontuacao.innerText = ("PONTUACAO: " + calcularPontuacao());
    overlayTela.appendChild(pontuacao);

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
    sairBtn.style = "color: var(--velvet)";
    sairBtn.className = "general-button";
    sairBtn.addEventListener("click", ()=> document.location.href = "../../screens/configuracoes/configs.html");
    divButtons.appendChild(sairBtn);

    clearTimeout(interval);

}

function stringifyTime(minutos, segundos){

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    return (minutos + ":" + segundos);

}

function formatMinSeg(tempo){
    var minutos = parseInt(tabuleiro.tempo / 60, 10);
    var segundos = parseInt(tabuleiro.tempo % 60, 10);

    return {minutos, segundos};
}

var interval;
var tempoOriginal = tabuleiro.tempo;

function startTimer(display){
    var minutos;
    var segundos;

    if(tabuleiro.modoJogo == "classico"){

        interval = setInterval(()=>{
        
            ({ minutos, segundos } = formatMinSeg(tabuleiro.tempo));
    
            display.innerText = stringifyTime(minutos, segundos);
                tabuleiro.tempo++;
    
        }, 1000);

    }else{

        interval = setInterval(()=>{
        
            ({ minutos, segundos } = formatMinSeg(tabuleiro.tempo));
    
            display.innerText = stringifyTime(minutos, segundos);
    
            if(--tabuleiro.tempo < 0){
                tabuleiro.tempo = tabuleiro.tempo;
            }
    
            if(tabuleiro.tempo < 0){
                
                fimDeJogoGUIEvent(0);
            }
    
        }, 1000);

    }

    
}

function calcularPontuacao(){
    let modoJogo = tabuleiro.modoJogo;
    let qtdBombas = tabuleiro.numeroBombas;
    let tamanho = tabuleiro.numeroCelulas;
    let abertas = tabuleiro.celulasAbertas;
    let segundosGastos = tempoOriginal - tabuleiro.tempo;

    let pontuacao = 0;

    if(abertas == 0 || abertas  < ((tamanho * tamanho) - qtdBombas))
        return pontuacao;

    pontuacao = modoJogo == "classico" ? 1000/((tamanho*tamanho)/qtdBombas) : (1000/((tamanho * tamanho)/qtdBombas) * 1.5) - segundosGastos*1.1;

    return pontuacao;
}