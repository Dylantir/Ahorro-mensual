document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const ingresos = parseFloat(document.getElementById('ingresos').value);
    const gastos = parseFloat(document.getElementById('gastos').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(ingresos) || isNaN(gastos)) {
        resultado.textContent = 'Por favor ingresa números válidos.';
        return;
    }

    const ahorro = ingresos - gastos;

    if (ahorro > 0) {
        resultado.textContent = `¡Buen trabajo! Puedes ahorrar $${ahorro.toFixed(2)} este mes.`;
    } else if (ahorro === 0) {
        resultado.textContent = 'Tus ingresos y gastos están equilibrados. No hay ahorro.';
    } else {
        resultado.textContent = `¡Cuidado! Estás gastando más de lo que ganas. Déficit de $${Math.abs(ahorro).toFixed(2)}.`;
    }
});
