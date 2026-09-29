const formDados = document.getElementById("formDados");

function Mathpow(evento) {
  evento.preventDefault();


  let valorInteiro = Number(document.getElementById("valorInteiro").value);
  let valorQuadrado = valorInteiro ** 2;


  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O resultado é: " + valorQuadrado.toFixed(2);
}

formDados.addEventListener("submit", Mathpow);