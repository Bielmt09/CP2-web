// Script geral

//FUNÇÃO TROCAR
function trocar(cor){
  document.body.style.background=cor;
}

let imagens=[
  "src/assets/slide1.jpg",
  "src/assets/slide2.jpg",
  "src/assets/slide3.jpeg",
  "src/assets/slide4.webp",
  "src/assets/slide5.webp",
];

//DECLARANDO AS VARIAVEIS

let i=0;
let tempo =5000; // milisegundos

//função 

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout(slideShow,tempo)
}
slideShow();
