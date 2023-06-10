import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Projet = new Schema({
    nom:{
        type : String
    },
    description:{
        type : String
    },
    codeCR:{ 
        type : Array  // Tableau des compétences requises à avoir
    },
    codeCO:{
        type : Array // Tableau des compétences obtenus suite au projet 
    },
    codeP :{
        type : String // Identifiant du projet
    },
    enseigant :{
        type : String
    }
});

export default mongoose.model('Projet',Projet);



