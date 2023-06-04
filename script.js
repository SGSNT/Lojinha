
////////////////TITULO SECTION PRODUTOS//////////////////////////
const products = document.getElementById('produtos');

const titulo = document.createElement('h1');

titulo.classList.add('titulo-principal');

titulo.textContent = 'Lojinha do Miagui';

products.appendChild(titulo);
////////////////////////FIM//////////////////////////////////////


//////////////////////////PRODUTOS DA LOJINHA/////////////////
let vitrine = [

{
   nome: "Bola da Copa",
   preco: 86.3,
   url_img:"./img/bola_copa.webp",
   descricao:" Bola utilizada na Copa do Mundo, ideal para utilizar em campo e colecionar"
},

{
    nome: "Carrinho da Hot Wheels",
    preco: 5.8,
    url_img:"./img/carro_hotwheels.jpeg",
    descricao:" Carrinho para dar de presentes para crianças ou colecionar"
},

{
    nome: "Chinelo",
    preco: 19.99,
    url_img:"./img/chinelo.webp",
    descricao:" Chinelo para se utilizar em qualquer lugar"
},

{
    nome: "Escorredor de Louça",
    preco: 15.2,
    url_img:"./img/escorredor_louca.webp",
    descricao:" Utilizando para ajudar no processo de secagem dos utensilios"
},

{
    nome: "Espada Medieval",
    preco: 200.18,
    url_img:"./img/espada_medieval.png",
    descricao:" Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
},

{
    nome: "Guitarra",
    preco: 1980.99,
    url_img:"./img/guitarra.webp",
    descricao:" Otima para utilizar em bandas de hard rock"
},

{
    nome: "Toalha de Banho",
    preco: 9.99,
    url_img:"./img/toalha_banho.webp",
    descricao:" Boa para se secar apos o banho"
},

{
    nome: "Vinho",
    preco: 59.9,
    url_img:"./img/vinho.webp",
    descricao:"Vinho que harmoniza muito bem com carnes vermelhas"
}
];
///////////////////////FIM/////////////////////////////////


////////////////////////////FUNÇÃO PARA EXIBIR OS PRODUTOS///////////////////////
function exibirProdutos(){
    const sectionProducts = document.getElementById('produtos');
    
    ///////////////CRIANDO OS ELEMENTOS///////////////////
    vitrine.forEach((produto) => {  //Como se fosse o for
    const divProdutos = document.createElement('div'); //criando uma div
    divProdutos.classList.add('produtos');
    const imgProdutos = document.createElement('img'); //Criando uma img
    imgProdutos.classList.add('produtos-img');
    const h2Nome = document.createElement('h2'); //Criando um h2
    h2Nome.classList.add('produtos-h2');
    const precoProdutos = document.createElement('p'); //Criando Parágrafo para o preço
    precoProdutos.classList.add('produtos-preco');
    const descricao = document.createElement('p'); //Criando outro Parágrafo para a descrição do produto
    descricao.classList.add('produtos-descricao');
    ///////////

    imgProdutos.src = produto.url_img; 
    h2Nome.textContent = produto.nome;
    precoProdutos.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
    descricao.textContent = `Descrição: ${produto.descricao}`;

    divProdutos.appendChild(imgProdutos);
    divProdutos.appendChild(h2Nome);
    divProdutos.appendChild(precoProdutos);
    divProdutos.appendChild(descricao);
    sectionProducts.appendChild(divProdutos);
    });
}
//////////////////////////////////FIM////////////////////////////////////////

///////////////CHAMADA DA FUNÇÃO///////////////////////
exibirProdutos();
