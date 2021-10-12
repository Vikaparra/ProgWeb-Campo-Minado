function verficar(tabuleiro,linha, coluna){
    var numeroBombasEncontradas = 0;

    if(tabuleiro.matriz[linha][coluna] == 1){
       return -1;
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
