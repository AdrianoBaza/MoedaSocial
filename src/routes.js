const express = require('express');
const ClienteController = require('./controllers/ClienteController');
const ContaController = require('./controllers/ContaController');

const router = express.Router();

router.get('/clientes', ClienteController.index);
router.post('/clientes', ClienteController.store);
router.put('/clientes/:cliente_id', ClienteController.update);
router.delete('/clientes/:cliente_id', ClienteController.delete);

router.get('/clientes/conta', ContaController.index);
router.get('/:numero_conta/conta', ContaController.indexOne);
router.post('/clientes/:cliente_id/conta', ContaController.store);

module.exports = router;
