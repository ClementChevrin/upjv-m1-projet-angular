import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Competence = new Schema({
    nom:{
        type : String
    },
    description:{
        type : String
    },
    codeC:{
        type : String // Identifiant de la compétence
    }
});

export default mongoose.model('Competence',Competence);



