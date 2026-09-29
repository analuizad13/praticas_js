document.getElementById("formDados").addEventListener("submit", function(event) {
    event.preventDefault();
    const v1 = parseInt(document.getElementById("valor1").value);
    const v2 = parseInt(document.getElementById("valor2").value);
    const campoResultado = document.getElementById("resultado");
    if (!isNaN(v1) && !isNaN(v2)) {
        const inicio = Math.min(v1, v2);
        const fim = Math.max(v1, v2);
        const impares = [];
        for (let i = inicio; i <= fim; i++) {
            if (i % 2 !== 0) {
                impares.push(i);
            }
        }
        if (impares.length > 0) {
            campoResultado.textContent = `Números ímpares entre ${inicio} e ${fim}: ${impares.join(", ")}`;
        } else {
            campoResultado.textContent = `Não existem números ímpares no intervalo entre ${inicio} e ${fim}.`;
        }
    } else {
        campoResultado.textContent = "Por favor, insira números inteiros válidos.";
    }
});