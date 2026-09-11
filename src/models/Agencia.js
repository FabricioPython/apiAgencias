import mongoose from 'mongoose';


const agenciaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    CGC: { type: String, required: true},
    Nome: { type: String, required: true},
    Logradouro: { type: String},
    Municipio: { type: String},
    CEP: { type: String},
    UF: { type: String},
    Telefone: { type: String},
    Atendimento: { type: String}}, {versionKey: false}
);


const agencia = mongoose.model('Agencia', agenciaSchema);

export default agencia;
