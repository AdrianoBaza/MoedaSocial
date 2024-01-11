const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login-simulado', (req, res) => {
    const { matricula, senha } = req.body;

    // Simulação de lógica de autenticação
    if (matricula === 'usuario123' && senha === 'senha123') {
        res.json({ success: true, message: 'Login bem-sucedido!' });
    } else {
        res.json({ success: false, message: 'Credenciais inválidas.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});