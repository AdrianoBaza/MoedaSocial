async function realizarLogin() {
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;

    if (matricula !== '123456' || senha !== '1234') {
        alert('Login ou senha inválidos.');
    } else {
        try {
            // Simulação de uma resposta do servidor
            const data = { success: true, message: 'Login bem-sucedido' };

            if (data.success) {
                alert(data.message);
                // Redireciona para a página desejada após o login
                window.location.href = './src/user.html'; 
            } else {
                alert('Matrícula ou senha inválidos. Solicitação não encontrada no banco de dados.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    }
}





  