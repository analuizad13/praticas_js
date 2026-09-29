const formDados = document.getElementById("formDados");

function Polegadapracm(evento) {
  evento.preventDefault();


  let valorPolegadas = Number(document.getElementById("valorPolegadas").value);
  let valorCentimetro = valorPolegadas * 2.54;


  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O resultado é: " + valorCentimetro.toFixed(2);
}

formDados.addEventListener("submit", Polegadapracm);