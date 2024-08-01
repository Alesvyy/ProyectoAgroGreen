const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/Proyecto';

mongoose.connect(DB_URL,{})

    .then(db => console.log("DB conect"))
    .catch(err => console.log(err))

let registroferiaSchema = new mongoose.Schema({
    nombreferia: {type:String,required:true},
    diaferia: {type:Date, required:true},
    provincia: {type:String, required:true},
    canton: {type:String, required:true},
    distrito: {type:String, required:true},
   // fotografia: { data: Buffer, contentType: String }, //Preguntar por el tipo
   
},{versionKey:false});


let registroferia = new mongoose.model('registroferias', registroferiaSchema)

module.exports = registroferia