const prompt = require('prompt-sync')()

var branco = 0;
var parametro = true

lista = [
    {nome: "Candidato X", votos: 0},
    {nome: "Candidato Y", votos: 0},
    {nome: "Candidato Z", votos: 0},

]

do{
    console.log("\nEleição, escolha o seu candidato: \n1-Candidato X\n2-Candidato Y\n3-Candidato Z\n4-Branco\n0-Encerrar.")
    console.log("")
    var voto = Number(prompt("Digite seu voto: "))
    if(isNaN(voto)){
        console.log("\nOpção inválida. Escolha novamente.\n")
    }else{
        switch(voto){
            case 1:
                lista[0].votos++
                continue;
            case 2:
                lista[1].votos++;
                continue;
            case 3:
                lista[2].votos++;
                continue;
            case 4:
                branco++;
                continue;
            case 0:
                parametro = false;
        }
    }
}while(parametro);

//método de ordenação da lista - BubleSort
for(i=0; i < lista.length; i++){
    for(j=0; j < lista.length -1; j++){
        if(lista[j].votos < lista[j+1].votos){
            temp = lista[j].votos
            lista[j].votos = lista[j+1].votos
            lista[j+1].votos = temp
        }
    }
}

console.log("\nEleições encerradas.")
console.log(`1° Lugar: ${lista[0].nome}, votos: ${lista[0].votos} `)
console.log(`2° Lugar: ${lista[1].nome}, votos: ${lista[1].votos}`)
console.log(`3° Lugar: ${lista[2].nome}, votos: ${lista[2].votos}`)

console.log(`Votos em branco: ${branco}`)
