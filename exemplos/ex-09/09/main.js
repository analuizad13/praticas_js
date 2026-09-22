let nome = "Ana Luiza";
let idade = 17;

console.log("o nome do usuário é: " + nome);
console.log("A idade do usuário é: " + idade);

const pNomeUsuario = document.getElementById("nomeUsuario"); //pega um elemento pelo id
pNomeUsuario.textContent = "O nome do usuário é: " + nome;

const pidadeUsuario = document.getElementById("idadeUsuario"); //pega um elemento pelo id
pidadeUsuario.textContent = "A idade do usuário é: " + idade;