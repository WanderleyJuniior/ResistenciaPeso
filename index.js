function calcular() {
    const ldInput = document.getElementById('ld');
    const leInput = document.getElementById('le');
    const ld = ldInput.value.trim();
    const le = leInput.value.trim();

    if (ld === '' || le === '') {
      alert('Por favor, preencha os dois campos (LD e LE) antes de calcular.');
      return;
    }

    const ldNum = parseFloat(ld);
    const leNum = parseFloat(le);

    const md = (ldNum + leNum) / 2;
    document.getElementById('resultado').innerText = `Média Dinamométrica (MD): ${md.toFixed(2)}`;
  }

  function resetar() {
    document.getElementById('ld').value = '';
    document.getElementById('le').value = '';
    document.getElementById('resultado').innerText = '';
  }