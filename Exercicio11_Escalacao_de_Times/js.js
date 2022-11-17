/*var nomeJogador = window.prompt("Olá, diga o nome do jogador a ser escalado: ");

var posicaoJogador = window.prompt(
  "Agora, diga a posição do jogador a ser escalado: "
);

var numeroJogador = window.prompt(
  "Agora, diga o número do jogador a ser escalado: "
);

var menu = (numeroJogador = window.prompt(
  `Bom o jogador, ${nomeJogador} está para ser escalado como ${posicaoJogador}, com o número da camisa ${numeroJogador}. \n
  Você concorda?(s/n)`
));*/

function escalarJogador() {
  var escalar = window.confirm("Deseja escalar mesmo esse jogador?");

  //Pegando o Nome do jogador
  if (escalar == true) {
    var nome = document.querySelector("#nome");
    var textoNome = nome.value;
    console.log(textoNome);

    //Pegando a posição do jogador
    var posicao = document.querySelector("#posicao");
    var textoPosicao = posicao.value;
    console.log(textoPosicao);

    //Pegando a número do jogador
    var numero = document.querySelector("#numero");
    var textoNumero = numero.value;
    console.log(textoNumero);

    //Colocando no documento
    const escalarList = document.getElementById("escalar-list");

    const h3 = document.createElement("h3");
    h3.innerText = `Jogador Escalado: `;

    const ul = document.createElement("ul");
    //Colocando nome no jogador
    const nomeLi = document.createElement("li");
    nomeLi.innerText = `Nome: ${textoNome}`;
    ul.appendChild(nomeLi);
    ul.appendChild(document.createElement("br"));

    //Colocando posição no jogador
    const posicaoLi = document.createElement("li");
    posicaoLi.innerText = `Posição: ${textoPosicao}`;
    ul.appendChild(posicaoLi);
    ul.appendChild(document.createElement("br"));

    //Colocando posição no jogador
    const numeroLi = document.createElement("li");
    numeroLi.innerText = `Número: ${textoNumero}`;
    ul.appendChild(numeroLi);
    ul.appendChild(document.createElement("br"));

    escalarList.append(h3, ul);
  } else {
    alert("Tente novamente");
  }
}

function removerJogador() {
  var number2 = document.querySelector("#numberToRemove");
  var number3 = number2.value;
  const playerToRemove = document.getElementById("player-" + number3);
  console.log(number3);

  const confirmation = confirm("Remover o jogador" + number3 + "?");

  if (confirmation) {
    document.getElementById("escalar-list").removeChild(number3);
    document.getElementById("numberToRemove").value = "";
  }
}
