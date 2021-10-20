"use strict";

// export class Tabuleiro {Tabuleiro}

//Função para saber quantas bombas há perto da célula
function verificar(tabuleiro, linha, coluna){
    var numeroBombasEncontradas = 0;

    if(tabuleiro.matriz[linha][coluna] == "B"){
       return "B";
    }else{
        for(let colunas=coluna-1; colunas <= (coluna+1); colunas++){
            for(let linhas=linha-1; linhas <= (linha+1); linhas++){
                if(colunas >= 0 && linhas >= 0){
                    if(tabuleiro.matriz[linhas][colunas]==1){
                        numeroBombasEncontradas++;
                    }
                }  
            }
        }
        return numeroBombasEncontradas;
    }
}

//Função para preencher o tabuleiro com numeros das bombas em volta
function preencherNumeros(tabuleiro, num_celulas){
    for (let coluna = 0; coluna < num_celulas; coluna++) {
        for (let linha = 0; linha < num_celulas; linha++) {
            tabuleiro[linha][coluna] = verificar(tabuleiro, linha, coluna);        
        }
    }
}

//Função para verificar a celula no momento do clique
function clique(tabuleiro, linha, coluna){

    let celula = tabuleiro[linha][coluna];

    switch (celula) {
        case 0: //se a célula não tiver bombas (nela e perto)
            //roda função recursiva pra abrir tudo que for 0 em volta
            celulasZero(tabuleiro, linha, coluna);
            if(celulasAbertas==celulasSb){
                fimDeJogo("V");
            }
            break;

        case "B": //se a célula tiver bomba (nela)
            fimDeJogo("D"); 
            break;

        default: //se a célula tiver bombas (perto)
            //so mostra normalmente o valor
            //bloqueia no html pra nao poder clicar mais
            if(celulasAbertas==celulasSb){
                fimDeJogo("V");
            }
            break;
    }

}

//Função para abrir celulas vizinhas da celula vazia
function celulasZero(tabuleiro, linha, coluna){
    for(let colunas=coluna-1; colunas <= (coluna+1); colunas++){
        for(let linhas=linha-1; linhas <= (linha+1); linhas++){
            if(colunas >= 0 && linhas >= 0){
                if(tabuleiro.matriz[linhas][colunas]==0){
                    //mostra a casa e chama a função novamente
                    //bloqueia no html pra nao clicar mais ---> style.pointerEvents = 'none';
                    celulasAbertas++;
                    celulasZero(tabuleiro, linhas, colunas); //rodando de novo para abrir todas que são 0 em volta
                }
                else if(tabuleiro.matriz[linhas][colunas]=="B"){
                    celulasAbertas++;
                    return "B"; //mostra célula fechada
                }
                else {
                    celulasAbertas++;
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
        //display DIV de derrota
    }
    else {
        //display DIV de vitória
    }
}

// Parte do Tabuleiro para testes