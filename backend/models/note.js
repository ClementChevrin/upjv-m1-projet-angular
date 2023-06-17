// Importation de Mongoose
import mongoose from 'mongoose';

// Définition du schéma
const Schema = mongoose.Schema;

// Création du schéma Note
let Note = new Schema({
    note: {
        type: Number // Note de la note
    },
    commentaire: {
        type: String // Commentaire de la note
    }
});

// Exportation du modèle Competence basé sur le schéma
export default mongoose.model('Note', Note);



