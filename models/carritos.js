const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/Proyecto';

mongoose.connect(DB_URL,{})

    .then(db => console.log("DB conect"))
    .catch(err => console.log(err))

let carritoSchema = new mongoose.Schema({
    NombreProducto: {type:String,required:true},
    categoria: {type:String, required:true},
    unidadesDispo: {type:Number, required:true},
    precio: {type:Number, required:true}
   // fotografia: { data: Buffer, contentType: String }, //Preguntar por el tipo
   
},{versionKey:false});


let carrito = new mongoose.model('carritos', carritoSchema)

module.exports = carrito