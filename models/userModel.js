const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema para los usuarios
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    twoFactorEnabled: { type: Boolean, default: false },
    twoFactorSecret: { type: String }
}, { collection: 'Usuarios' });  // Especifica la colección 'Usuarios'

// Exportar el modelo
module.exports = mongoose.model('User', userSchema);
