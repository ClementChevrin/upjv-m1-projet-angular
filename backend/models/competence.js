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
        type : String
    }
});

export default mongoose.model('Competence',Competence);

