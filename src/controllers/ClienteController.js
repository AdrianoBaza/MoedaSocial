const Cliente = require('../models/Cliente');

module.exports = {
        
    async index(req, res) {

        const cliente = await Cliente.findAll();

        if (cliente == "" || cliente == null) {
            return res.status(200).send({ message: "Nenhum cliente cadastrado" });
        }

        return res.status(200).send({ clientes: cliente });

    },

    async store(req, res) {

        const { name, cpf, data_nascimento, email, password } = req.body;

        const cliente = await Cliente.create({ name, cpf, data_nascimento, email, password });

        return res.status(200).send({
            status: 1,
            message: 'cliente cadastrado com sucesso!',
            cliente
        });

    },

    async update(req, res) {

        const { name, cpf, data_nascimento, email, password } = req.body;

        const { cliente_id } = req.params;

        await Cliente.update({
            name, cpf, data_nascimento, email, password
        }, {
            where: {
                id: cliente_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Cliente atualizado com sucesso!",
        });

    },

    async delete(req, res) {

        const { cliente_id } = req.params;

        await Cliente.destroy({
            where: {
                id: cliente_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Cliente excluído com sucesso!",
        });

    }

};