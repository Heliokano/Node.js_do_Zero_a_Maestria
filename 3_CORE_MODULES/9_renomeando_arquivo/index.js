const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novo.txt'
//fs.rename('arquivo.txt', 'novoarquivo.txt', function(err){
fs.rename(arqAntigo, arqNovo, function(err){

    if(err){
        console.log(err)
        return
    }
    
    //console.log('Arquivo renomeado')
    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})