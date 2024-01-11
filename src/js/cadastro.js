// Função para visualizar a imagem antes de carregar
function previewImage() {
    const inputFoto = document.getElementById('inputFoto');
    const previewFoto = document.getElementById('previewFoto');
  
    const file = inputFoto.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        previewFoto.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  // Função para enviar dados ao back-end (simulação)
  function enviarDados() {
    const form = new FormData();
  
    const inputFoto = document.getElementById('inputFoto').files[0];
    const inputNome = document.getElementById('inputNome').value;
    const inputNomeCurso = document.getElementById('inputNomeCurso').value;
    const inputNomeUsuario = document.getElementById('inputNomeUsuario').value;
    const inputSenha = document.getElementById('inputSenha').value;
    const inputConfirmeSenha = document.getElementById('inputConfirmeSenha').value;
    const inputEndereco = document.getElementById('inputEndereco').value;
    const inputCidade = document.getElementById('inputCidade').value;
    const inputEstado = document.getElementById('inputEstado').value;
    const inputCEP = document.getElementById('inputCEP').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputCelular = document.getElementById('inputCelular').value;
  
    // Verifica se todos os campos estão preenchidos
    if (
      inputNome === '' ||
      inputNomeCurso === '' ||
      inputNomeUsuario === '' ||
      inputSenha === '' ||
      inputConfirmeSenha === '' ||
      inputEndereco === '' ||
      inputCidade === '' ||
      inputEstado === '' ||
      inputCEP === '' ||
      inputEmail === '' ||
      inputCelular === '' ||
      !inputFoto
    ) {
      // Exibe alerta se algum campo estiver vazio
      alert('Preencha todos os campos, incluindo a foto!');
      return; // Impede a execução do restante da função
    }
  
  // Verifica se as senhas são iguais
  if (inputSenha !== inputConfirmeSenha) {
    // Exibe alerta se as senhas não coincidem
    alert('As senhas não coincidem. Por favor, digite novamente.');
    return;
  }

    // Adiciona os dados ao formulário
    form.append('foto', inputFoto);
    form.append('nome', inputNome);
    form.append('nomeCurso', inputNomeCurso);
    form.append('nomeUsuario', inputNomeUsuario);
    form.append('senha', inputSenha);
    form.append('endereco', inputEndereco);
    form.append('cidade', inputCidade);
    form.append('estado', inputEstado);
    form.append('cep', inputCEP);
    form.append('email', inputEmail);
    form.append('celular', inputCelular);
  
    // Exemplo de saída no console (simulação)
    for (const pair of form.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    // envio para o back-end
    // Substitua o código abaixo com a lógica real de envio de dados para o back-end
  
    // Limpa os campos do formulário
    document.getElementById('inputFoto').value = '';
    document.getElementById('inputNome').value = '';
    document.getElementById('inputNomeCurso').value = '';
    document.getElementById('inputNomeUsuario').value = '';
    document.getElementById('inputSenha').value = '';
    document.getElementById('inputConfirmeSenha').value = '';
    document.getElementById('inputEndereco').value = '';
    document.getElementById('inputCidade').value = '';
    document.getElementById('inputEstado').value = '';
    document.getElementById('inputCEP').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputCelular').value = '';
    document.getElementById('inputFoto').value = ''; // Limpa o input do arquivo
  
  
    // Exibe um alerta
    alert('Dados enviados');
  }
  
  
  