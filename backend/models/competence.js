// Importation de Mongoose
import mongoose from 'mongoose';

// Définition du schéma
const Schema = mongoose.Schema;

// Création du schéma Competence
let Competence = new Schema({
    nom: {
        type: String // Nom de la compétence
    },
    description: {
        type: String // Description de la compétence
    },
    codeC: {
        type: String // Identifiant de la compétence
    }
});

// Exportation du modèle Competence basé sur le schéma
export default mongoose.model('Competence', Competence);



