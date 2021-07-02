const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs')



const userSchema = new Schema({
    email: String,
    password: String
});


userSchema.methods.ecryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10)) 

};


userSchema.methods.validarpassword = function (password) {
    return bcrypt.compareSync(password, this.password);

}

const PersonaModel = mongoose.model('usuariosSys', userSchema)

const mostrar = async ()=>{
    const persona = await PersonaModel.find()
    console.log(persona)

}

//Mostramos la funcion que consulta los registros
mostrar()


module.exports = mongoose.model('usuariosSys', userSchema); 

