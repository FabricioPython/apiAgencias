import agencia from "../models/Agencia.js";


class AgenciaController {


    static async getAgenciaByCGC (req, res) {
        try {
            const cgc = req.params.CGC;
            const agencia_cgc = await agencia.find({"CGC": `${cgc}`});
            res.status(200).json(agencia_cgc);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar agência!", error });
        }
    }

    static async getAgencias (req, res) {
        try {
            const uf = req.params.UF;
            const agencias = await agencia.find({"UF": `${uf}`});
            res.status(200).json(agencias);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar agências!", error });
        }
    }

    static async createAgencia (req, res) {
        try {
            const novaAgencia = await agencia.create(req.body);
            res.status(201).json({ message: "Agência criada com sucesso!", agencia: novaAgencia });

        } catch (error) {
            res.status(500).json({ message: "Erro ao criar agência!", error });     

        }}


        static async infoAgencia (req, res) {

            try {   
    
            const countRJ = await agencia.countDocuments({ UF: "RJ" });
            const countSP = await agencia.countDocuments({ UF: "SP" });
            const countMG = await agencia.countDocuments({ UF: "MG" });
            const countES = await agencia.countDocuments({ UF: "ES" });
            res.status(200).json({ "Agencias por Estado": { RJ: countRJ, SP: countSP, MG: countMG, ES: countES }  });

            } catch (error) {
                res.status(500).json({ message: "Erro ao buscar informações das agências!", error });
            }
    
        }

        static async getMunicipios (req, res) {
            try {
                const cidade = req.params.cidade;
                const municipios = await agencia.find({Municipio: cidade });
                //console.log(municipios);
                res.status(200).json({ "Municipios": municipios });
            } catch (error) {
                res.status(500).json({ message: "Erro ao buscar municípios!", error });
            }

    
    
    }
}


export default AgenciaController;