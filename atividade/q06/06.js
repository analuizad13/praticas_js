document.getElementById("formDados").addEventListener("submit", function(event) {
    event.preventDefault();
    const n1 = parseFloat(document.getElementById("notaN1").value);
    const n2 = parseFloat(document.getElementById("notaN2").value);
    const campoResultado = document.getElementById("resultado");
    if (!isNaN(n1) && !isNaN(n2) && n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10) {
        const mediaFinal = (n1 * 2 + n2 * 3) / 5;
        if (mediaFinal >= 6.0) {
            campoResultado.textContent = `Sua nota final é ${mediaFinal.toFixed(1)}. Você está APROVADO! 🎉`;
        } else {
            campoResultado.textContent = `Sua nota final é ${mediaFinal.toFixed(1)}. Você está REPROVADO. ❌`;
        }
    } else {
        campoResultado.textContent = "Por favor, insira notas válidas entre 0 e 10.";
    }
});