import agencia from "../models/Agencia.js";


class AgenciaController {

    static openAgencia(req, res) {
        res.status(200).json({ message: "Bem-vindo à nossa API de Agências!" });
    }

    async getAgenciaById(req, res) {
        try {
            const agencia = await agencia.findById(req.params.id); 
            res.status(200).json(agencia);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar agência!", error });
        }
    }

    async getAgencias(req, res) {
        try {
            const agencias = await agencia.find();
            res.status(200).json(agencias);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar agências!", error });
        }
    }

    static async createAgencia(req, res) {
        try {
            const novaAgencia = await agencia.create(req.body);
            res.status(201).json({ message: "Agência criada com sucesso!", agencia: novaAgencia });

        } catch (error) {
            res.status(500).json({ message: "Erro ao criar agência!", error });     

        }

    

}}


export default AgenciaController;