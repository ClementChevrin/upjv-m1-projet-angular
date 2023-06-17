// Importation de Mongoose
import mongoose from 'mongoose';

// Définition du schéma
const Schema = mongoose.Schema;

// Création du schéma Projet
let Projet = new Schema({
    nom: {
<<<<<<< Updated upstream
        type: String // Nom de la note
=======
        type: String
>>>>>>> Stashed changes
    },
    description: {
        type: String
    },
<<<<<<< Updated upstream
    codeCR: {
        type: Array  // Tableau des compétences requises à avoir
    },
    codeCO: {
        type: Array // Tableau des compétences obtenus suite au projet 
    },
    codeP: {
        type: String // Identifiant du projet
    },
=======
    // Competences du projet
    codeComp: {
        type: Array
    },
    codeP: {
        type: String // Identifiant du projet
    },
>>>>>>> Stashed changes
    enseigant: {
        type: String
    }
});

export default mongoose.model('Projet', Projet);



