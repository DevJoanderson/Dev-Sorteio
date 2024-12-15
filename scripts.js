function genereteNumber() {
    // Obter os valores dos inputs e garantir que são números válidos
    const min = parseInt(document.querySelector(".input-min").value, 10);
    const max = parseInt(document.querySelector(".input-max").value, 10);

    // Verificação se os valores são válidos e se min < max
    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (min >= max) {
        alert("O valor de 'min' deve ser menor que 'max'.");
        return;
    }

    // Geração do número aleatório
    const result = Math.floor(Math.random() * (max - min)) + min; // Exclusivo para 'max'

    // Exibir o resultado
    alert(result);
}
