function realizarPagamento() {
    const valorPagar = parseFloat(document.getElementById('valor').value);
  
    if (isNaN(valorPagar) || valorPagar <= 0) {
        alert('Informe um valor válido para o pagamento.');
        return;
    }
  
    const saldoAtual = parseFloat(document.getElementById('saldoAtual').innerText);
    
    if (valorPagar > saldoAtual) {
        alert('Saldo insuficiente para realizar o pagamento.');
        return;
    }
  
    // Obter a data e hora atuais
    const dataHoraAtual = new Date();
  
    // Formatar a data e hora como string
    const dataHoraFormatada = dataHoraAtual.toLocaleString();
    
    // Espaço para inserir a descrição
    const descricao = prompt('Insira uma descrição para a compra:');
    
    // Simulação do desconto do saldo (esta lógica deve ser implementada no back-end)
    const novoSaldo = saldoAtual - valorPagar;
  
    // Atualiza o elemento HTML com o novo saldo
    document.getElementById('saldoAtual').innerText = novoSaldo.toFixed(2);
  
    // Limpa o campo de valor
    document.getElementById('valor').value = '';
  
    // Exibir informações sobre o pagamento
    alert(`Pagamento realizado com sucesso!\nData e Hora: ${dataHoraFormatada}\nDescrição: ${descricao}`);
  }