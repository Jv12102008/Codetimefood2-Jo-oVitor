let contador = 0;

let contadorUsuarios = 0

let prato;
let pratoValor;

let drink;
let valorDrink;

let sobremesa;
let valorSobremesa;

function selecionarPrato(botaoClicado, valor) {
  prato = botaoClicado;
  pratoValor = valor;

  const selecionado = document.querySelector("#prato .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  } else {
    contador++;
    verificarContador();
  }

  const seletor = "." + botaoClicado;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");
}

function selecionarDrink(botaoClicado, valor) {
  drink = botaoClicado;
  valorDrink = valor;

  const selecionado = document.querySelector("#drink .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  } else {
    contador++;
    verificarContador();
  }

  const seletor = "." + botaoClicado;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");
}

function selecionarSobremesa(botaoClicado, valor) {
  sobremesa = botaoClicado;
  valorSobremesa = valor;
  const selecionado = document.querySelector("#sobremesa .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  } else {
    contador++;
    verificarContador();
  }

  const seletor = "." + botaoClicado;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");
}

function verificarContador() {
  if (contador === 3) {
    avancarPag();
  }
}

function avancarPag() {
  valorTotal = pratoValor + valorDrink + valorSobremesa;
  const continuar = document.querySelector(".continuar");
  continuar.classList.add("avancar");
  const trocaNome = (document.querySelector("footer a").innerHTML = "Avançar");

  const resumoPrato = document.querySelector(".resumoPrato");
  resumoPrato.innerHTML =
    "Seu pedido: " + prato + " R$ " + pratoValor.toFixed(2);

  const resumoDrink = document.querySelector(".resumoDrink");
  resumoDrink.innerHTML =
    "Seu drink: " + drink + " R$ " + valorDrink.toFixed(2);

  const resumoSobremesa = document.querySelector(".resumoSobremesa");
  resumoSobremesa.innerHTML =
    "Sua sobremesa: " + sobremesa + " R$ " + valorSobremesa.toFixed(2);

  const total = document.querySelector(".total");
  total.innerHTML = "Total: " + valorTotal.toFixed(2);
}

function carrinho() {
  const telaDeConteudo = document.querySelector(".telaDeConteudo");
  telaDeConteudo.classList.add("escondido");

  const telaDeResumo = document.querySelector(".telaDeResumo");
  telaDeResumo.classList.remove("escondido");
}

function whatsApp() {
  const enderecoContato = endereco.value; 
  const nomeDeUsuarioContato = nomeDeUsuario.value;
  let total = pratoValor + valorDrink + valorSobremesa;
  let numero = "5571988259196";
  let mensagem = "Olá, gostaria de confirmar meu pedido: ";
  let mensagemFormatada =
    encodeURIComponent(mensagem) +
    prato +
    " R$" +
    pratoValor.toFixed(2) +
    ", " +
    drink +
    " R$" +
    valorDrink.toFixed(2) +
    ", " +
    sobremesa +
    " R$" +
    valorSobremesa.toFixed(2) +
    ", " +
    " Total: R$" +
     total.toFixed(2) + ". " + "O meus dados por contato são: "+ nomeDeUsuarioContato + " e " + enderecoContato ;

  let urlWhatsApp = "https://wa.me/" + numero + "?text=" + mensagemFormatada;
  window.open(urlWhatsApp, "_blank");
}

function cadastro() {
  let nome = document.querySelector(".nome").value;
  let gmail = document.querySelector(".gmail").value;
  let endereco = document.querySelector(".endereco").value;
  let senha = document.querySelector(".senha").value;
}
/* telta de cadastro */

const form = document.getElementById("form");
const nomeDeUsuario = document.getElementById("username");
const email = document.getElementById("emailColocado");
const endereco = document.getElementById("endereco");
const senhaCriada = document.getElementById("senhaCriada");
const senhaConferida = document.getElementById("senhaConferida");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  verificarForm();
});

nomeDeUsuario.addEventListener("blur", () => {
  verificarNome();
});

email.addEventListener("blur", () => {
  verificarEmail();
});

endereco.addEventListener("blur", () => {
  verificarEndereco();
});

senhaCriada.addEventListener("blur", () => {
  verificarSenha();
});

senhaConferida.addEventListener("blur", () => {
  confirmacaoDeSenha();
});

function verificarNome() {
  const nomeDeUsuarioValue = nomeDeUsuario.value;

  if (nomeDeUsuarioValue === "") {
    errorInputCadastro(nomeDeUsuario, "O nome de usuário é obrigatório!");
  } else {
    const formItem = nomeDeUsuario.parentElement;
    formItem.className = "form-conteudo";
  }
}

function verificarEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInputCadastro(email, "O email é obrigatório!");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-conteudo";
  }
}

function verificarEndereco() {
  const enderecoValue = endereco.value;


  if (enderecoValue === "") {
    errorInputCadastro(endereco, "O endereço é obrigatório!!");
  } else {
    const formItem = endereco.parentElement;
    formItem.className = "form-conteudo";
  }
}

function verificarSenha() {
  const senhaCriadaValue = senhaCriada.value;

  if (senhaCriadaValue === "") {
    errorInputCadastro(senhaCriada, "A senha é obrigatória");
  } else if (senhaCriadaValue.length < 8) {
    errorInputCadastro(senhaCriada, "A senha deve ter no mínimo 8 caracteres.");
  } else {
    const formItem = senhaCriada.parentElement;
    formItem.className = "form-conteudo";
  }
}

function confirmacaoDeSenha() {
  const senhaCriadaValue = senhaCriada.value;
  const senhaConferidaValue = senhaConferida.value;

  if (senhaConferidaValue === "") {
    errorInputCadastro(senhaConferida, "A conferencia de senha é obrigatória.");
  } else if (senhaConferidaValue !== senhaCriadaValue) {
    errorInputCadastro(senhaConferida, "As senhas não são iguais.");
  } else {
    const formItem = senhaConferida.parentElement;
    formItem.className = "form-conteudo";
  }
}

function verificarForm() {
  verificarNome();
  verificarEmail();
  verificarEndereco();
  verificarSenha();
  confirmacaoDeSenha();

  const formItem = form.querySelectorAll(".form-conteudo");

  const validar = [...formItem].every((item) => {
    return item.className === "form-conteudo";
  });

  if (validar) {
    const telaDeCadastro = document.querySelector(".telaDeCadastro")
    telaDeCadastro.classList.add('escondido')

    const login = document.querySelector(".telaDeLogin")
  login.classList.remove('escondido')
  }
}

function errorInputCadastro(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerHTML = message;
  formItem.className = "form-conteudo error";
}

/* tela de login */

const logarSite = document.getElementById("entrar");
const emailLogin = document.getElementById("emailLogin");
const senhaLogin = document.getElementById("senhaLogin");

logarSite.addEventListener("submit", (event) => {
  event.preventDefault();

  verificarLogin()
});

function loginEmail() {
  const emailLoginValue = emailLogin.value;
  const emailValue = email.value;
  if (emailLoginValue === "") {
    errorInputLogin(emailLogin, "É obrigatório colocar o email.");
  }else if(emailLoginValue === emailValue){
    const loginItem = emailLogin.parentElement;
    loginItem.className = "login-conteudo";
  }
}

function loginSenha(){
  const senhaCriadaValue = senhaCriada.value;
  const senhaLoginValue = senhaLogin.value;

  if (senhaLoginValue === "") {
    errorInputLogin(senhaLogin, "A senha é obrigatória.")
  } else if(senhaLoginValue === senhaCriadaValue) {
    const loginItem = senhaLogin.parentElement;
    loginItem.className = "login-conteudo";
  }
}

function errorInputLogin(input, message) {
  const loginItem = input.parentElement;
  const textMessage = loginItem.querySelector("a");

  textMessage.innerHTML = message;
  loginItem.className = "login-conteudo error";
}


function verificarLogin() {
  loginEmail();
  loginSenha();

  const loginItem = logarSite.querySelectorAll(".login-conteudo");

  const validar = [...loginItem].every((item) => {
    return item.className === "login-conteudo";
  });

  if (validar) {
    const login = document.querySelector(".telaDeLogin")
  login.classList.add('escondido')

  const telaDeConteudo = document.querySelector(".telaDeConteudo")
  telaDeConteudo.classList.remove('escondido')
  }
}

/* tela de entrada */

function login(){
  const telaDeEntrada = document.querySelector(".telaDeEntrada")
  telaDeEntrada.classList.add('escondido')

  const login = document.querySelector(".telaDeLogin")
  login.classList.remove('escondido')
}

function cadastro(){
  const telaDeEntrada = document.querySelector(".telaDeEntrada")
  telaDeEntrada.classList.add('escondido')

  const telaDeCadastro = document.querySelector(".telaDeCadastro")
  telaDeCadastro.classList.remove('escondido')
}