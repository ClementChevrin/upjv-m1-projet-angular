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
    competences: [
        {
            _id : String,
            nom : String,
            description : String,
            codeC : String,
            etat : Number
        }
    ],
    codeP: {
        type: String // Identifiant du projet
    },
    enseignant: {
        type: String
    }
});

export default mongoose.model('Projet', Projet);





