// Importation de Mongoose
import mongoose from 'mongoose';

// Définition du schéma
const Schema = mongoose.Schema;

// Création du schéma Projet
let Projet = new Schema({
    nom: {
        type: String // Nom de la note
    },
    description: {
        type: String
    },
    codeCR: {
        type: Array  // Tableau des compétences requises à avoir
    },
    codeCO: {
        type: Array // Tableau des compétences obtenus suite au projet 
    },
    codeP: {
        type: String // Identifiant du projet
    },
    enseigant: {
        type: String
    }
});

export default mongoose.model('Projet', Projet);



