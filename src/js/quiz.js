// quiz
alert("Saibam mais sobre o Quiz")


const perguntas= [
 {
    pergunta:"Qual é a principal uva utilizada na produção do vinho tinto Malbec?\n Opcao A) A Cabernet Sauvignon  \n Opcao B) B Malbec \n Opcao C) C Merlot\n",
    resposta:"B"
 },
 {
    pergunta:"O que significa o termo “tanino” no vinho?\n Opcao A) A Uma substância que dá doçura ao vinho\n Opcao B) B Um tipo de gás usado na fermentação\n Opcao C) C Um composto que dá sensação de adstringência (secura) na boca\n",
    resposta:"C"
 },
 {
    pergunta:"Qual país é tradicionalmente conhecido como o berço do vinho?\n Opcao A) A França\n Opcao B) B Itália \n Opcao C) C Grécia\n",
    resposta:"A"
 },

];

//declarando a variavel de acertos que recebe 0
let acertos = 0;

// criar um laço de repetição para verificar as perguntas

for(let i=0; i<perguntas.length;i++){
    const respostaUsuario=prompt(perguntas[i].pergunta);

    //verifica se o que o usuario digitou for minusculo e se não for converte para ser
    if(respostaUsuario.toLowerCase() === perguntas[i].resposta.toLocaleLowerCase()){
        acertos++;
    }
}
document.getElementById("msg").innerHTML=(`Você aceretou ${acertos} de ${perguntas.length} perguntas`)
