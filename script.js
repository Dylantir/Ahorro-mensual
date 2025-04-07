function calcularAhorro() {
  const ahorro = parseFloat(document.getElementById('ahorro').value);
  const meses = parseInt(document.getElementById('meses').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(ahorro) || isNaN(meses) || ahorro <= 0 || meses <= 0) {
    resultado.textContent = "Por favor, ingresa valores válidos.";
    return;
  }

  const total = ahorro * meses;
  resultado.textContent = `Tu ahorro total será de $${total.toLocaleString('es-CO')}`;
}
