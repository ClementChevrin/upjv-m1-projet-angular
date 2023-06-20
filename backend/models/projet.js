// Importation de Mongoose
import mongoose from 'mongoose';

// Définition du schéma
const Schema = mongoose.Schema;

// Création du schéma Projet
let Projet = new Schema({
    nom: {
        type: String
    },
    description: {
        type: String
    },
    // Competences du projet
    competences: {
        type: Array
    },
    codeP: {
        type: String // Identifiant du projet
    },
    enseigant: {
        type: String
    }
});

export default mongoose.model('Projet', Projet);





