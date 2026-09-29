document.getElementById("formDados").addEventListener("submit", function(event) {
    event.preventDefault();
    const valorHora = parseFloat(document.getElementById("valorHora").value);
    const horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
    const campoResultado = document.getElementById("resultado");
    if (!isNaN(valorHora) && valorHora > 0 && !isNaN(horasTrabalhadas) && horasTrabalhadas > 0) {
        const salario = valorHora * horasTrabalhadas;
        campoResultado.textContent = `O salário total é: R$ ${salario.toFixed(2).replace('.', ',')}`;
    } else {
        campoResultado.textContent = "Por favor, insira valores válidos e maiores que zero.";
    }
});