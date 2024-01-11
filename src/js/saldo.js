function adquirirSaldo() {
    const valorAdquirir = parseFloat(document.getElementById('valor').value);
  
    if (isNaN(valorAdquirir) || valorAdquirir <= 0) {
        alert('Informe um valor válido para adquirir saldo.');
        return;
    }
  
    // Obter a data e hora atuais do dispositivo
    const dataHoraAtual = new Date();
  
    // Formatar a data e hora como string
    const dataHoraFormatada = dataHoraAtual.toLocaleString();
  
    // Espaço para inserir a descrição
    const descricao = prompt('Insira uma descrição para a aquisição de saldo:');
    
    // Simulação da lógica de adição de saldo (esta lógica deve ser implementada no back-end)
    const saldoAtual = parseFloat(document.getElementById('saldoAtual').innerText);
    const novoSaldo = saldoAtual + valorAdquirir;
  
    // Atualiza o elemento HTML com o novo saldo
    document.getElementById('saldoAtual').innerText = novoSaldo.toFixed(2);
  
    // Limpa o campo "Valor a Adquirir"
    document.getElementById('valor').value = '';
  
    alert(`Saldo de R$ ${valorAdquirir.toFixed(2)} adquirido com sucesso!\nData e Hora: ${dataHoraFormatada}\nDescrição: ${descricao}`);
  }
  
    