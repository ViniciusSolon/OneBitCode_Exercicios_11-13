/* ## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.*/

const form = document.getElementById("orderForm");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  //N ATUALIZA A PAGINA
  const name = document.querySelector('input[name="name"]').value;
  console.log(name);

  const devSection = document.getElementById("devSection");
  const h3 = document.createElement("h3");

  h3.innerText = `${name}, Cadastrado!`;
  const ul = document.createElement("ul");
  ul.id = "salad";
  //Nome da Tecnologia
  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome da tecnologia: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));

  //Botões radio
  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Tempo de Experiencia: 0-2 anos: ";
  const botInput = document.createElement("input");
  botInput.type = "Radio";
  botInput.name = "exp";
  botInput.value = "0-2 anos";
  phoneLi.appendChild(botInput);
  //
  const phoneLi2 = document.createElement("li");
  phoneLi2.innerText = "3-4 anos: ";
  const botInput2 = document.createElement("input");
  botInput2.type = "Radio";
  botInput2.name = "exp";
  botInput2.value = "3-4 anos";
  phoneLi2.appendChild(botInput2);

  const phoneLi3 = document.createElement("li");
  phoneLi3.innerText = "3-4 anos: ";
  const botInput3 = document.createElement("input");
  botInput3.type = "Radio";
  botInput3.name = "exp";
  const botInput3v = (botInput3.value = "5+ anos");
  phoneLi3.appendChild(botInput3);

  ul.appendChild(phoneLi);
  ul.appendChild(phoneLi2);
  ul.appendChild(phoneLi3);

  devSection.append(h3, ul);
});

function consoleContact() {
  let salad = "";
  const fullnameInput = document.querySelector('input[name="name"]').value;
  const techName = document.querySelector('input[name="fullname"]').value;
  const techExp = document.querySelector(' input[type="radio"]:checked').value;
  //   document
  //     .querySelectorAll("input[name='exp']:checked")
  //     .forEach(function (item) {
  //       salad += " - " + item.value + "\n";
  //     });
  const developers = [];
  let technologies = [];
  technologies.push({ name: techName, exp: techExp });

  const newDev = { fullname: fullnameInput, technologies: technologies };
  developers.push(newDev);
  alert("Dev cadastrado com sucesso!");
  console.log(developers);
}

function removeContact() {
  const contactSection = document.getElementById("devSection");

  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
