import mongoose from 'mongoose';


const agenciaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    cgc: { type: String, required: true },
    nome: { type: String, required: true },
    endereco: { type: String},
    municipio: { type: String},
    cep: { type: String},
    uf: { type: String},
    telefone: { type: String},
    atendente: { type: String}}
);


const agencia = mongoose.model('Agencia', agenciaSchema);

export default agencia;
