function realizarTransferencia() {
    const destinatarioCampo = document.getElementById('destinatario');
    const valorTransferirCampo = document.getElementById('valor');
    
    const destinatario = destinatarioCampo.value;
    const valorTransferir = parseFloat(valorTransferirCampo.value);
  
    if (!destinatario || isNaN(valorTransferir) || valorTransferir <= 0) {
      alert('Preencha corretamente o destinatário e o valor a transferir.');
      return;
    }
  
    const saldoAtual = parseFloat(document.getElementById('saldoAtual').innerText);
  
    if (valorTransferir > saldoAtual) {
      alert('Saldo insuficiente para realizar a transferência.');
      return;
    }
  
    const dataHoraAtual = new Date();
    const dataFormatada = `${dataHoraAtual.getFullYear()}-${formatarNumero(dataHoraAtual.getMonth() + 1)}-${formatarNumero(dataHoraAtual.getDate())}`;
    const horaFormatada = `${formatarNumero(dataHoraAtual.getHours())}:${formatarNumero(dataHoraAtual.getMinutes())}:${formatarNumero(dataHoraAtual.getSeconds())}`;
  
    const mensagemSucesso = `Transferência de R$ ${valorTransferir.toFixed(2)} para ${destinatario} realizada com sucesso em ${dataFormatada} ${horaFormatada}!`;
  
    // Simulação da lógica de transferência de saldo (esta lógica deve ser implementada no back-end)
    const novoSaldo = saldoAtual - valorTransferir;
    document.getElementById('saldoAtual').innerText = novoSaldo.toFixed(2);
  
    // Enviar dados para o back-end
    const dadosTransferencia = {
      destinatario: destinatario,
      valorTransferir: valorTransferir,
      dataHora: `${dataFormatada} ${horaFormatada}`,
    };
  
    fetch('/seu-endpoint-no-servidor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosTransferencia),
    })
      .then(response => response.json())
      .then(data => console.log('Resposta do servidor:', data))
      .catch(error => console.error('Erro ao enviar dados para o servidor:', error));
  
    // Limpar os campos após a transferência
    destinatarioCampo.value = '';
    valorTransferirCampo.value = '';
  
    alert(mensagemSucesso);
  }
  
  // Função para formatar números menores que 10 com um zero à esquerda
  function formatarNumero(numero) {
    return numero < 10 ? `0${numero}` : numero;
  }