document.getElementById("formDados").addEventListener("submit", function(event) {
    event.preventDefault();
    const raio = parseFloat(document.getElementById("valorRaio").value);
    const campoResultado = document.getElementById("resultado");
    if (!isNaN(raio) && raio > 0) {
        const perimetro = 2 * Math.PI * raio;
        campoResultado.textContent = `O perímetro do círculo é: ${perimetro.toFixed(2)}`;
    } else {
        campoResultado.textContent = "Por favor, informe um raio válido maior que zero.";
    }
});