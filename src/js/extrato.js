// Dados de exemplo para a tabela e o gráfico
const dadosExtrato = {
    '2024-01': [
      { data: '2024-01-05T10:30:00', descricao: 'Compra Online - 10:30 AM', valor: 50.00 },
      { data: '2024-01-10T15:45:00', descricao: 'Restaurante - 03:45 PM', valor: 30.00 },
      // Adicione mais dados conforme necessário
    ],
    '2024-02': [
      { data: '2024-02-03T12:15:00', descricao: 'Supermercado - 12:15 PM', valor: 700.00 },
      { data: '2024-02-18T18:20:00', descricao: 'Cinema - 06:20 PM', valor: 10.00 },
      // Adicione mais dados conforme necessário
    ],
    // Adicione mais meses conforme necessário
  };
  
  // Adiciona R$ 1000.00 ao saldo inicial
  let saldoAtual = 1000.00;
  
  const mesSelector = document.getElementById('mesSelector');
  const saldoAtualSpan = document.getElementById('saldoAtual');
  const tabelaExtrato = document.querySelector('.extrato-saldo-table tbody');
  const graficoCanvas = document.getElementById('saldoChart');
  let myChart; // Variável para armazenar a instância do gráfico
  
  // Função para popular a tabela com base no mês selecionado
  function popularTabela(mesSelecionado) {
    tabelaExtrato.innerHTML = '';
  
    if (dadosExtrato[mesSelecionado]) {
      dadosExtrato[mesSelecionado].forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.data}</td><td>${item.descricao}</td><td>R$ ${item.valor.toFixed(2)}</td>`;
        tabelaExtrato.appendChild(row);
  
        // Subtrai o valor do gasto do saldo atual
        saldoAtual -= item.valor;
      });
    }
  
    // Atualiza o saldo atual na interface
    atualizarSaldoAtual();
  }
  
  // Função para criar o gráfico com base no mês selecionado
  function criarGrafico(mesSelecionado) {
    const dadosGrafico = {
      labels: [],
      datasets: [{
        label: 'Saldo Mensal',
        data: [],
        backgroundColor: 'rgba(52, 152, 219, 0.5)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 1
      }]
    };
  
    if (dadosExtrato[mesSelecionado]) {
      dadosExtrato[mesSelecionado].forEach((item) => {
        dadosGrafico.labels.push(item.data);
        dadosGrafico.datasets[0].data.push(item.valor);
      });
    }
  
    // Adiciona o saldo atual ao gráfico
    dadosGrafico.labels.push('Saldo Atual');
    dadosGrafico.datasets[0].data.push(saldoAtual);
  
    // Destroi o gráfico atual, se existir
    if (myChart) {
      myChart.destroy();
    }
  
    // Cria um novo gráfico
    const ctx = graficoCanvas.getContext('2d');
    myChart = new Chart(ctx, {
      type: 'line',
      data: dadosGrafico,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Função para atualizar o saldo atual na interface
  function atualizarSaldoAtual() {
    saldoAtualSpan.innerText = `R$ ${saldoAtual.toFixed(2)}`;
  }
  
  // Função chamada quando o mês é alterado
  function onChangeMes() {
    const mesSelecionado = mesSelector.value;
    
    // Reseta o saldo atual ao valor inicial ao mudar de mês
    saldoAtual = 1000.00;
    
    // Atualiza os dados com base no mês selecionado
    popularTabela(mesSelecionado);
    criarGrafico(mesSelecionado);
  }
  
  // Inicialização do seletor de mês
  mesSelector.addEventListener('change', onChangeMes);
  onChangeMes(); // Chamada inicial para exibir o extrato do mês atual