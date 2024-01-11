// Função para obter e exibir o saldo do back-end
async function obterESaldo() {
    try {
        // Substitua a URL abaixo pela URL real do seu back-end
        const response = await fetch('URL_DO_SEU_BACKEND/aqui/vai/o/endereco/do/endpoint/de/saldo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Adicione quaisquer cabeçalhos adicionais necessários para autenticação ou outros fins
            },
            // Adicione quaisquer informações adicionais necessárias no corpo da requisição
        });

        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
            // Converte a resposta para JSON
            const data = await response.json();
            
            // Atualiza o elemento de saldo com as informações obtidas
            document.getElementById('saldo').textContent = `Saldo: R$ ${data.saldo.toFixed(2)}`;
        } else {
            console.error('Erro ao obter o saldo:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao obter o saldo:', error.message);
    }
}

// Chama a função para obter e exibir o saldo ao carregar a página
obterESaldo();


// Hamburguer menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }
  