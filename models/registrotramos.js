const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/Proyecto';

mongoose.connect(DB_URL,{})

    .then(db => console.log("DB conect"))
    .catch(err => console.log(err))

let registrotramoSchema = new mongoose.Schema({
    nombrevendedor: {type:String,required:true},
    tramoasignado: {type:Number, required:true},
    impuestoapp: {type:Number, required:true}
   // fotografia: { data: Buffer, contentType: String }, //Preguntar por el tipo
   
},{versionKey:false});


let registrotramo = new mongoose.model('registrotramos', registrotramoSchema)

module.exports = registrotramo
