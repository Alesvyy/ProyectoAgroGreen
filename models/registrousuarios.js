const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/Proyecto';

mongoose.connect(DB_URL,{})

    .then(db => console.log("DB conect"))
    .catch(err => console.log(err))

let registrousuarioSchema = new mongoose.Schema({
    usuario: {type:String,required:true},
    primerapellido: {type:String, required:true},
    segundoapellido: {type:String, required:true},
    IDidentificacion: {type:String, required:true},
    identificacion: {type:Number, required:true},
    telefono: {type:Number, required:true},
    correo: {type:String, required:true},
    password: {type:String, required: true},
   // fotografia: { data: Buffer, contentType: String }, //Preguntar por el tipo
    IDusuario: {type:String, required: true}
},{versionKey:false});


let registrousuario = new mongoose.model('registrousuarios', registrousuarioSchema)

module.exports = registrousuario