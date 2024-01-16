const Cliente = require('../models/Cliente');
const Conta = require('../models/Conta');


module.exports = {
        
    async index(req, res) {

        const contas = await Conta.findAll();

        if (contas == "" || contas == null) {
            return res.status(200).send({ message: "Nenhuma conta cadastrada" });
        }
        return res.status(200).send( contas );
    },

    async indexOne(req, res) {

        const { numero_conta } = req.params;
        const conta = await Conta.findByPk(numero_conta);

        if (conta == "" || conta == null) {
            return res.status(200).send({ message: "Conta não cadastrada" });
        }
        return res.status(200).send( conta );
    },

    /* async indexOne(req, res) {

        const { cliente_id } = req.params;
        const cliente = await Cliente.findByPk(cliente_id);
        const conta = await Conta.findByPk(cliente_id)
        
        if (!cliente) {
            return res.status(400).json({
                status: 0,
                message: 'Cliente não encontrado!'
            });
        }

        // if (conta == "" || conta == null) {
        //     return res.status(200).send({ message: "Conta não cadastrada" });
        //     conta = 'conta não cadastrada'
        // }


        return res.status(200).send( cliente, conta );
    }, */

    async store(req, res) {

        try {
  
            const { cliente_id } = req.params;
            const { numero_conta, saldo } = req.body;
  
            const cliente = await Cliente.findByPk(cliente_id);
  
            if (!cliente) {
                return res.status(400).json({
                    status: 0,
                    message: 'Cliente não encontrado!'
                });
            }
  
            const conta = await Conta.create({
              cliente_id,
              numero_conta,
              saldo,
            });
  
            return res.status(200).json({
                status: 1,
                message: "Conta cadastrada com sucesso!",
                conta
            });
  
          } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

};